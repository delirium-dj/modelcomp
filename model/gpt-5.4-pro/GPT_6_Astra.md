# GPT-5.4 Pro — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.4 Pro
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** GPT-5.4 Pro.
- **Short description:** Extra-compute variant for demanding professional reasoning; separate from GPT-5.4 Thinking.
- **Provider / access:** OpenAI Responses API and ChatGPT Pro access; API supports Batch.
- **Release / knowledge:** March 5, 2026; August 31, 2025 cutoff.
- **IDs:** `openai/gpt-5.4-pro`, snapshot `gpt-5.4-pro-2026-03-05`; no verified Free Zen ID.
- **Context window:** 1,050,000 tokens; 128,000 maximum output.
- **Modalities:** Text/image input and text output; medium/high/xhigh reasoning. Streaming and function calling supported; structured outputs unsupported. Computer use, MCP, apply patch and tool search supported; hosted shell and code interpreter unsupported.
- **Pricing (as of 2026-10-03):** $30 input / $180 output per million tokens, no cached-input rate. Above 272K input, full-session input doubles and output increases 50%.
- **Architecture:** Proprietary; parameter count undisclosed. Specifications: [official model page](https://developers.openai.com/api/docs/models/gpt-5.4-pro).

### Raw benchmarks found

Agent / tool use:

- BrowseComp **89.3%**, GDPval wins/ties **82.0%**, FinanceAgent v1.1 **61.5%**. Vendor research harness, xhigh: [launch evaluations](https://openai.com/index/introducing-gpt-5-4/).
- Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA Elo, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found for this Pro ID.

Reasoning / knowledge:

- GPQA Diamond **94.4%**; HLE **42.7% without tools / 58.7% with tools**; FrontierMath Tier 1–3 **50.0%**, Tier 4 **38.0%**; ARC-AGI-2 Verified **83.3%**. Same [vendor table](https://openai.com/index/introducing-gpt-5-4/).
- LCR/MLCR, CritPt, AA Intelligence Index, BenchLM and Omniscience: no verified public score found for Pro.

Coding:

- SWE-bench Verified/Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE and Coding Index: no verified public score found for this Pro variant. Base-family coding capability is a provisional proxy only.

Long context:

- No verified Pro-specific retrieval measurement found; vendor Graphwalks and MRCR rows leave this variant blank.

### Normalized scores (1–100)

- **Tool use: 87/100.** BrowseComp and FinanceAgent show strong workflows; missing exact terminal/computer-use scores constrain confidence.
- **Reasoning: 94/100.** GPQA, HLE and FrontierMath establish frontier reasoning, though vendor harness dependence remains.
- **Context window: 95/100.** Million-token capacity earns the size tier; unmeasured Pro retrieval prevents 100.
- **Multimodal: 70/100.** Image input is supported; native audio/video and nontext output are absent.
- **Coding: 78/100.** Provisional GPT-5.4 family estimate; no exact Pro coding benchmark supports a higher-confidence score.
- **Cost efficiency: 15/100.** $30/$180 and long-context surcharges make broad deployment expensive.
- **Overall Score: 85/100.** Half-up mean of 87, 94, 95, 70 and 78 is 85; strongest fit is difficult research rather than economical bulk processing.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not vendor scores. Coding is provisional.
- Future sources: Add a separate signed findings file alongside this report.
