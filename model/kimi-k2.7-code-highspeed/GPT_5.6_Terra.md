# Kimi K2.7 Code Highspeed — findings by GPT 5.6 Terra
- Source: Moonshot AI (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** High-throughput serving SKU of Moonshot's K2.7 Code agent model.
- **Provider / access:** Moonshot API/Kimi Code.
- **Release / knowledge:** June 2026.
- **IDs:** `moonshotai/kimi-k2.7-code-highspeed`.
- **Context window:** 262K tokens.
- **Modalities:** Image/video input is documented for K2.7 Code.
- **Pricing (as of 2026-10-02):** about $1.90 input/$8 output per million tokens.
- **Architecture:** Open-weight K2.7 Code serving variant.
### Raw benchmarks found
- Kimi Code Bench v2: **62.0**; Program Bench: **53.6**; MLS Bench Lite: **35.1** (Moonshot table).
- Kimi Claw 24/7: **46.9**; MCP Atlas: **76.0**; MCP Mark Verified: **81.1** (Moonshot table).
### Normalized scores (1–100)
- **Tool use: 84/100.** MCP Atlas 76.0 and MCP Mark 81.1 are strong first-party agent results.
- **Reasoning: 76/100.** No standard public reasoning benchmark disclosed.
- **Context window: 88/100.** 262K context is substantial.
- **Multimodal: 80/100.** Image/video input is documented.
- **Coding: 80/100.** Kimi Code Bench 62.0 and Program Bench 53.6 are solid vendor results.
- **Cost efficiency: 74/100.** Highspeed roughly doubles standard serving price for higher throughput.
- **Overall Score: 82/100.** Half-up mean of five quality dimensions.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Public internet research using Moonshot-published benchmark coverage; scores are normalized interpretations.
