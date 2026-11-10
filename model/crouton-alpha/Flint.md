# Crouton Alpha — findings by Flint

- Source: Crouton Alpha / stealth-model
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Crouton Alpha (stealth; maker undisclosed).
- **Short description:** Free stealth AI model with 1M-token context, multimodal (text, image, audio, video, files), built for scalable coding, agentic and multimodal workflows; pitched at small, repeated agent sub-tasks.
- **Provider / access:** OpenRouter (`stealth-model/crouton-alpha`); free during preview; OpenRouter/OpenCode block it in Europe.
- **Release / knowledge:** Appeared on OpenRouter ~2026-11-03; promo/free preview; knowledge cutoff not disclosed.
- **IDs:** `stealth-model/crouton-alpha`.
- **Context window:** 1M; max output not disclosed.
- **Modalities:** Text, image, audio, video, file inputs → text out.

### Raw benchmarks found

- Agentic / coding: built for scalable coding, agentic sub-tasks, tool use, document analysis; hands-on eval (lynxflow, 2026-11-04) noted 1M context, 3/3 retrieval at 219K tokens, 216.7 tok/s, real CyberGym vulnerability reproduction, head-to-head vs 6 frontier peers.

### Cross-source comparison

- Independent: lynxflow blog eval, i-scoop, aimlapi, commandcode, benchable, stealthmodels.

### Normalized scores (1–100)

- **Tool use: 70/100.** Agentic sub-tasks / tool use → mid-high.
- **Reasoning: 60/100.** Lightweight agentic model; limited independent reasoning evidence.
- **Context window: 95/100.** 1M documented; strong retrieval (3/3 at 219K).
- **Multimodal: 80/100.** Text, image, audio, video, file inputs.
- **Coding: 60/100.** Lightweight coding for agentic sub-tasks.
- **Cost efficiency: 100/100.** Free during preview.

- **Overall Score: 73/100.** Mean of the five quality dims (Tool 70 + Reasoning 60 + Context 95 + Multimodal 80 + Coding 60) / 5 = 53; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-10
- Method: public internet research prioritizing official sources plus independent coverage; stealth identity undisclosed.
- Reference URLs:
  - [Crouton Alpha Benchmarks: Free 1M Context Model, Blocked in Europe — stealthmodels.com](https://stealthmodels.com/crouton-alpha)
  - [Crouton Alpha Tested: The Free Stealth Model Built for Subagents — mindstudio.ai](https://www.mindstudio.ai/blog/crouton-alpha-stealth-model-test)
  - [Benchmarking stealth/crouton-alpha Across 8 Dimensions and 6 Frontier Peers — blog.lynxflow.co](https://blog.lynxflow.co/en/posts/2026-11-04-stealth-crouton-alpha-evaluation/)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
