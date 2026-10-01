# GPT-5 — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT-5
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship — a router pairing a fast model with a deeper reasoning model; set launch records in math/coding and was superseded by GPT-5.1 and later generations.
- **Provider / access:** OpenAI API / OpenRouter (`openai/gpt-5`); OpenCode Zen (`opencode/gpt-5`); no Free ID.
- **Release / knowledge:** released August 2025; knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5`
- **Context window:** 400K total (128K max output) — verified from OpenRouter and curated metadata.
- **Modalities:** text/image/file in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $1.25 in / $10 out per 1M (cached $0.125); Zen $1.07/$8.50.
- **Architecture:** proprietary router (fast + reasoning).

### Raw benchmarks found

Agent / tool use:

- Browsing suite: **84.8–86.5%** (BenchLM)
- JobBench **8.5%**; Vibe Code Bench **20.09%**
- Terminal-Bench / Tau3 / OSWorld / GDPval: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **84.2–85.4%** (AA)
- HLE (AA): **25.4–28.5%**
- AA-LCR **76.0–78.2%**; CritPt **0.0–5.7%**; AA Index **22.9–23.0%**
- AA-Omniscience Accuracy / Hallucination Rate: **39.5–40.3% / 82.2–83.2%** (negative Omniscience Index)
- AA MATH-500 **99.1–99.4%**; AA-IFBench **70.6–73.1%**

Coding:

- AA Coding Index **37.8%**; Vibe Code Bench **20.09%**
- SWE-bench / LiveCodeBench: no verified public score found for this ID

Long context:

- AA-LCR 76–78.2%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **74.2–74.3%**; Design Arena **1192 Elo**

### Normalized scores (1–100)

- **Tool use: 74/100.** Browsing 84.8–86.5% is strong; JobBench 8.5% and Vibe Code 20% show weak agentic execution.
- **Reasoning: 68/100.** GPQA 84–85% and MATH-500 99% are good; AA Index 23%, HLE 25–28% and CritPt 0–5.7% trail 2026 peers.
- **Context window: 80/100.** 400K router window (128K max output) with AA-LCR 76–78%.
- **Multimodal: 78/100.** Text + image/file in with MMMU-Pro 74.3%; text-only output.
- **Coding: 72/100.** Coding Index 37.8% and Vibe Code 20.1% are modest by 2026 standards; no SWE-bench number found.
- **Cost efficiency: 82/100.** $1.25/$10 per 1M (cached $0.125) remains decent value.
- **Overall Score: 74/100.** Mean of (74 + 68 + 80 + 78 + 72) / 5 = 74.4 → 74. Best-fit: legacy general-purpose use; modern 2026 models dominate.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenAI, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
