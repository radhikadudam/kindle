import React, { useEffect, useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useParams } from 'react-router-dom';

const Read = () => {
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const getBook = async () => {
            const response = await fetch(`http://kindle-production-5bff.up.railway.app/api/book/${id}`);
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Fetch error:", errorText);
                return;
            }

            const datas = await response.json();
            console.log(datas.pdf)
            if (datas && datas.pdf) {
                const url = `http://localhost:3001/${datas.pdf}`;
                setData(url);
            }
        };
        getBook();
    }, [id]);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '100vh' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                {data ? (
                    <Viewer
                        fileUrl={data}
                        plugins={[defaultLayoutPluginInstance]}
                        defaultScale={SpecialZoomLevel.PageFit}
                    />
                ) : (
                    <div>Loading PDF...</div>
                )}
            </Worker>
        </div>
    );
};

export default Read;
