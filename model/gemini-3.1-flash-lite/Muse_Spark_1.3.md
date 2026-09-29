# Gemini 3.1 Flash Lite — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.1 Flash Lite, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC); re-verified 2026-09-29 (UTC, user-signed-off re-research: DeepMind model-card table + AA Index 16 + BenchmarkList lanes added, release/GA/cutoff/pricing firmed; Tool 64 → 60, Reasoning 64 → 68, Context 100 → 95, Coding 64 → 66 — Overall holds 75)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite (Google lightweight 3.1)
- **Short description:** Google's lightweight, ultra-low-latency model engineered for high-frequency lightweight tasks.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.1-flash-lite`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-03-03 preview, 2026-05-07 GA (Enterprise docs); knowledge cutoff Jan 2025 (AA page — re-verified 2026-09-29)
- **IDs:** `google/gemini-3.1-flash-lite` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M), max output 65,536 — verified via API docs (re-verified 2026-09-29)
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes (minimal/low/medium/high thinking); tool calls yes (function calling, code execution, file search — API docs, re-verified 2026-09-29)
- **Pricing (as of 2026-09-18):** Free tier available; paid $0.25 in / $1.50 out per 1M (cheapest Gemini tier — re-verified 2026-09-29)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **31.0–34.1%** (BenchmarkList 34.1% high-effort / 3.5FL-page table 31.0% — lane variance noted — re-verified 2026-09-29); Terminal-Bench 2.0: **24.7%**; TerminalBench Hard: **24.2%** (same lanes)
- Terminal-Bench 4.0: **1%** (AA v4.3 component — re-verified 2026-09-29)
- Tau2-Telecom: **31.3%**; Tau3-Banking: **9.7%** (BenchmarkList lanes — re-verified 2026-09-29)
- AutomationBench-AA: **7%** (AA v4.3 component — re-verified 2026-09-29); GDPval-AA v2: **596 Elo** (AA component — low — re-verified 2026-09-29)
- MCP Atlas: **57.1%**; MultiChallenge: **60.6%**; APEX-Agents: **12.2%** (BenchmarkList lanes — re-verified 2026-09-29)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.9%** no-tools (DeepMind model card; beats 2.5 Flash 82.8% — re-verified 2026-09-29)
- HLE: **16.0%** no-tools (model card; **17%** AA v4.3 component — re-verified 2026-09-29)
- MMMLU (multilingual): **88.9%**; SimpleQA Verified: **43.3%**; FACTS suite: **40.6%** (model card — re-verified 2026-09-29)
- MMMU-Pro: **76.8%**; CharXiv Reasoning: **73.2%**; Video-MMMU: **84.8%** (model card — measured vision, re-verified 2026-09-29)
- CritPt: **1%** (AA v4.3 component — very low — re-verified 2026-09-29)
- Artificial Analysis Intelligence Index: **16** (AA; above median-13 tier — re-verified 2026-09-29); BenchLM overall: **no verified public score found**
- Omniscience: **−16** (AA v4.3 component — negative accuracy signal — re-verified 2026-09-29)

Coding:

- SWE-bench Verified: **62.8%** (BenchmarkList high-effort lane — re-verified 2026-09-29); SWE-Pro: **38.3%** (3.5FL-page table — re-verified 2026-09-29)
- LiveCodeBench: **72.0%** (model card) / **80.1%** (BenchmarkList lane — variant range noted — re-verified 2026-09-29)
- SciCode: **43%** (AA v4.3 component — re-verified 2026-09-29)
- Vibe Code Bench v1.1: **0.0%**; FrontierCode: **4.8%** (BenchmarkList lanes — weak tails — re-verified 2026-09-29)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window verified; MRCR v2 8-needle: 60.1% @128k avg but 12.3% @1M pointwise (model card — weak at full length); AA-LCR v1.1: 74% — re-verified 2026-09-29**

### Normalized scores (1–100)

- **Tool use: 60/100.** TB2.1 ~31–34% with Tau2 31.3%, MCP 57.1% and MultiChallenge 60.6% mid-band, Tau3 9.7% and TB4.0 1% weak tails; capped by no Claw/Toolathon numbers.
- **Reasoning: 68/100.** GPQA 86.9% and MMMLU 88.9% are strong for Lite with HLE 16–17% mid, but FACTS 40.6%, CritPt 1% and Omniscience −16 drag; capped by weak factuality evidence.
- **Context window: 95/100.** 1M tier (65K out) with MRCR 60.1% @128k but 12.3% @1M and LCR 74%; capped by weak full-length retrieval.
- **Multimodal: 85/100.** Five-type input with measured vision (MMMU-Pro 76.8, Video-MMMU 84.8, CharXiv 73.2); capped as outputs remain text.
- **Coding: 66/100.** LiveCode 72–80% and SWE-V 62.8% mid-band with SciCode 43%; capped by SWE-Pro 38.3% and Vibe 0.0% tails.
- **Cost efficiency: 98/100.** Free tier plus cheapest Lite fallback ($0.25/$1.50).
- **Overall Score: 75/100.** Mean of the five non-cost dims (60+68+95+85+66)/5 = 74.8 → 75; best-fit cheapest high-frequency 3.1 Lite pick — now evidence-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
