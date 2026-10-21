# Qwen 3.5 Plus — findings by Muse Glimmer 30B

- Source: Alibaba (`opencode/qwen-3.5-plus`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's hosted Qwen3.5 generation plus-tier vision-language model with 1M context for agents and coding. Superseded by Qwen3.6 Plus and later generations; production variant of the Qwen3.5-397B-A17B backbone with built-in tools.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.5-plus` (snapshot `qwen3.5-plus-2026-02-15`); OpenCode Zen `opencode/qwen-3.5-plus`; also OpenRouter, Vercel AI Gateway, Merge Gateway. OpenAI-compatible chat endpoint with per-request thinking / non-thinking toggle and built-in tools / web search / code interpreter.
- **Release / knowledge:** released 2026-02-16 (Alibaba Cloud); knowledge cutoff not published for the hosted tier.
- **IDs:** `opencode/qwen-3.5-plus` (Zen, paid); upstream `qwen3.5-plus`. No Free ID on Zen.
- **Context window:** 1,000,000 total — max input 991,808, max output 65,536; thinking mode 983,616 input with up to 81,920 chain-of-thought tokens. Verified via QwenCloud Model Studio docs.
- **Modalities:** Text, image, video in; text out. Thinking/non-thinking modes; tool calls with built-in tools and adaptive tool use; structured outputs supported on compatible routes.
- **Pricing (as of 2026-10-20):** Model Studio International ~$0.40 in / $2.40 out per 1M tokens; China region ~$0.115 / $0.688 per 1M under 128K, tiering to $0.573 / $3.44 above 256K; explicit cache read $0.04/1M; batch ~50% discount; OpenRouter from ~$0.30 / $1.80 per 1M. No free tier.
- **Architecture:** proprietary hosted variant of a sparse Mixture-of-Experts backbone (397B total / 17B active) with hybrid linear attention (Gated DeltaNet) plus full attention; open-weight sibling Qwen3.5-397B-A17B available on Hugging Face. Apache 2.0 for weights.

### Raw benchmarks found

> All numbers from Vals AI public model page for `alibaba_qwen3.5-plus-thinking`, release 2026-02-16. Confidence intervals shown where published.

Agent / tool use:

- Terminal-Bench 2.0: **41.57% ±5.25** rank 31/67 (Vals AI)
- HLE with tools / Tau3-Banking / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.37% ±1.67** rank 38/138 (Vals AI)
- MMLU Pro: **87.18% ±0.33** rank 34/138 (Vals AI)
- LegalBench: **85.10% ±0.41** rank 26/151 (Vals AI)
- MMMU Pro: **22.77% ±1.01** rank 93/93 (Vals AI)
- SAGE: **30.40% ±3.15** rank 80/91 (Vals AI)
- MortgageTax: **60.77% ±0.97** rank 65/98 (Vals AI)
- HLE / LCR / MLCR / CritPt / AA Intelligence Index: no verified public score found for the Plus tier

Coding:

- LiveCodeBench: **85.33% ±1.00** rank 34/143 (Vals AI)
- SWE-bench: **71.20% ±2.03** rank 59/88 (Vals AI)
- Vibe Code Bench v1.1: **15.74% ±3.18** rank 90/116 (Vals AI)

Long context:

- MRCR / RULER / GraphWalks: no verified public score found for the Plus tier

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology.

- **Tool use: 55/100.** Terminal-Bench 2.0 41.57% rank 31/67 shows usable agentic coding but trails frontier entries at ~70%+; capped by absence of Tau3/Toolathon/MCP-Atlas measurements and mid-tier terminal work.
- **Reasoning: 84/100.** GPQA Diamond 87.37% rank 38/138 and MMLU Pro 87.18% rank 34/138 are strong academic results; capped by lack of HLE/LCR figures and MMMU Pro 22.77%.
- **Context window: 95/100.** Verified 1,000,000-token window with 991,808 max input / 65,536 max output and 81,920-token thinking budget. Excellent tier; no published 1M retrieval retention %.
- **Multimodal: 85/100.** Native text, image and short-video input with text output; one of the few 1M-context multimodal agents. Capped by no published document/PDF-specific figure and low MMMU Pro.
- **Coding: 78/100.** LiveCodeBench 85.33% rank 34/143 and SWE-bench 71.20% rank 59/88 are solid mid-frontier; Vibe Code Bench 15.74% limits the score.
- **Cost efficiency: 95/100.** $0.40/$2.40 per 1M International, $0.115/$0.688 China region, $0.04/1M cache read, ~50% batch pricing and OpenRouter from $0.30/$1.80. Very economical for 1M multimodal.
- **Overall Score: 79/100.** Half-up mean of the five quality dims: (55 + 84 + 95 + 85 + 78) / 5 = 79.4. Best fit as a high-volume 1M-context multimodal agent / RAG backbone where per-token cost and context dominate.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; Vals AI model page and QwenCloud/Alibaba Cloud Model Studio docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Sol.md`, using the same headings.
