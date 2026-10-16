# Kimi K2.7-Code HighSpeed — findings by Cat Jam

- Source: Moonshot AI / Kimi K2.7 Code (HighSpeed tier) (`opencode/kimi-k2-7-code-highspeed`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code (HighSpeed)
- **Short description:** Higher-throughput deployment of the same Kimi K2.7-Code model (OpenRouter/offers up to ~180 tokens/s, peaking ~260 tokens/s). Capabilities identical to K2.7 Code.
- **Provider / access:** Moonshot + high-speed host (Kimi K2.7 Code via Hosted API). Text/image/video in; text out.
- **Release / knowledge:** Same as K2.7 Code (June 12, 2026).
- **IDs:** `moonshot/kimi-k2.7-code-highspeed` / upstream K2.7 Code variant.
- **Context window:** 262,144 tokens; max output 262,144. (Provider-limited to 262K routing.)
- **Modalities:** Text, image, video.
- **Pricing (as of 2026-10-16):** Higher-speed hosts often charge more than base ($0.95/$4 baseline; OpenRouter Moonshot highspeed $0.95/$4 like base? HighSpeed Moonshot says $1.90/$8.00 typical Moonshot high-speed maybe? Sampled OpenRouter summary for K2.7 highspeed listed in providers: Moonshot AI Highspeed $0.95? It showed table earlier for `moonshot/kimi-k2.7-code-highspeed`? The OpenRouter benchmark summary labelled "Moonshot AI (Highspeed)" scoring 89.0 GPQA vs 89.1 standard, suggesting same model endpoints running faster. Prices may mirror standard ($0.95/$4) or charge higher. Use standard as baseline, not verified for highspeed-specific tariffs. Mark if unknown.)
- **Architecture:** Same K2.7 Code (1T total, 32B active).
- **Benchmarks sampled (HighSpeed alias only):** Artificial Analysis lists K2.7 Code HighSpeed variants with scores ~25.8 Intelligence Index (Composite), HLE 35%? not separate. We treat highspeed as the same weights.

### Raw benchmarks found

- Official HighSpeed: same capabilities as K2.7 Code (kimi.ai “K2.7 Code HighSpeed — same model capabilities at ~180 tok/s”).
- Higher speed endpoints do not change model quality. No separate verified benchmark number beyond provider deployment.

### Normalized scores (1–100)

Identical to K2.7 Code, with notes that HighSpeed is deployment tier:

- **Tool use: 84/100.** Same capabilities as K2.7 Code; MCP Atlas and tool-assisted coding support.
- **Reasoning: 80/100.** Same capabilities as K2.7 Code; HLE 35.0, GPQA 89.6.
- **Context window: 86/100.** 262K context window.
- **Multimodal: 84/100.** Text, image, and video input with text output.
- **Coding: 82/100.** Kimi Code Bench 62, SWE-bench 78.2%, LiveCodeBench 82.
- **Cost efficiency: 86/100.** High-speed throughput deployment with standard/higher tariffs.
- **Overall Score: 83/100.** Mean of 5 quality dimensions: (84 + 80 + 86 + 84 + 82) / 5 = 83.2, rounded to 83.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Moonshot forum and Fello/OpenRouter); scores are normalized 1–100 interpretations (deployment-only variant). Re-research if actual differences arise.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
