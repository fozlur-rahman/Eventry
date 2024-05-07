import { getPlaiceholder } from "plaiceholder";

async function getBlurData(imagSrc) {
    const buffer = await fetch(imagSrc).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
    );

    const data = await getPlaiceholder(buffer);
    return data;
}

export { getBlurData };
