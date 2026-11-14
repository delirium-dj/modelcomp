# DiffusionGemma 26B A4B — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** DiffusionGemma 26B A4B is Google DeepMind's block-diffusion (discrete diffusion) generative model in the Gemma 4 family. It is a 26B-A4B MoE that generates text in parallel 256-token "canvases" with a fixed-step denoising process, rather than token-by-token autoregressive output — trading some benchmark accuracy for faster generation. Compared to the autoregressive Gemma 4 26B A4B it scores lower on reasoning/coding (MMLU-Pro 77.6% vs 82.6%; AIME 2026 69.1% vs 88.3%; LiveCodeBench v6 69.1% vs 77.1%; GPQA Diamond 73.2% vs 82.3%) but offers meaningfully higher throughput. Open weights (BF16→Q4); an NVFP4 4-bit build exists.

## Model card
| Field | Value |
|---|---|
| Vendor | Google DeepMind |
| Family | Gemma 4 (block-diffusion variant) |
| Architecture | 26B-A4B MoE, discrete/block diffusion |
| Modalities | Text + image input |
| Generation | 256-token parallel blocks + denoising |
| License | Open weights (BF16 → Q4) |

## Raw benchmarks
- **Agent / Tool use:** Not a primary agent model; general use.
- **Reasoning:** Below autoregressive Gemma 4 26B A4B on reasoning benchmarks.
- **Coding:** LiveCodeBench v6 69.1% (vs 77.1% AR).
- **Long context:** 256K context (family); not the differentiator here.

## Normalized scores
- **Tool use: 68/100.** General-purpose; not agent-tuned.
- **Reasoning: 68/100.** Lower than AR Gemma 4 26B A4B.
- **Context window: 78/100.** 256K context.
- **Multimodal: 72/100.** Image input supported.
- **Coding: 68/100.** LiveCodeBench v6 69.1%.
- **Cost efficiency: 84/100.** Open weights; faster generation via diffusion.
- **Overall Score: 70.8/100.** Mean of the five quality dims (68+68+78+72+68 = 354 / 5 = 70.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://news.miracleplus.com/share_link/136098
  - https://blog.csdn.net/gitblog_00612/article/details/170423588
  - https://blog.csdn.net/gitblog_00097/article/details/170431219
  - https://huke88.com/article/8374.html
  - https://baijiahao.baidu.com/s?id=1861699642509801365&wfr=spider&for=pc
