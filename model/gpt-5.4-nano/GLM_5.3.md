# GPT-5.4 nano — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.4-nano`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** The smallest, cheapest member of the GPT-5.4 family — "for tasks where speed and cost matter most", recommended for classification, data extraction, ranking, and coding subagents handling simpler supporting tasks. Variant of GPT-5.4 (nano tier); API-only.
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`); not offered in ChatGPT/Codex. On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.4-nano`).
- **Release / knowledge:** released 2026-03-17 (dated ID `gpt-5.4-nano-2026-03-17` per Vals AI evals). Knowledge cutoff not published.
- **IDs:** `gpt-5.4-nano`; Zen `opencode/gpt-5.4-nano`. No Free ID on Zen.
- **Context window:** 400K tokens (BenchLM model details; family spec). Measured long-context retrieval degrades above 64K (see raw benchmarks).
- **Modalities:** text and image input, text output; reasoning (xhigh in official evals); tool use supported (official evals run it in MCP/τ2/terminal harnesses).
- **Pricing (as of 2026-10-01):** $0.20 / $1.25 per MTok in/out (official and Zen; Zen cached read $0.02). No free tier.
- **Architecture:** proprietary, size undisclosed; system card addendum on OpenAI's Deployment Safety Hub.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46.3%** (official, xhigh)
- Terminal-Bench 2.1 (Vals): **41.6%**
- OSWorld-Verified: **39.0%** (official — well below the family's 75.0%; screenshot-driven computer use is not the nano's strength)
- MCP Atlas: **56.1%** (official — surprisingly close to the mini's 57.7%)
- Toolathlon: **35.5%** (official)
- τ2-bench (Telecom): **92.5%** (official — nearly matches the mini's 93.4%)
- GDPval-AA: **1035** raw / **21.8%** normalized (Artificial Analysis via BenchLM)
- APEX-Agents-AA: **24.9%**; AA Agentic Index: **17.7%** (AA via BenchLM)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (official, xhigh; Vals: 77.5%; AA: 81.7%)
- HLE with tools: **37.7%**; HLE without tools: **24.3%** (official)
- ARC-AGI-1: **51.50%**; ARC-AGI-2: **5.7%** (ARC Prize via BenchLM)
- FrontierMath v2: **25.860%** (Tiers 1-3), **6.250%** (Tier 4) (Epoch AI via BenchLM)
- CritPt: **9.3%** (AA via BenchLM)
- AA Intelligence Index: **20.7%**; AA-LCR: **76.7%**; AA-IFBench: **75.9%** (AA via BenchLM)
- Omniscience: accuracy **25.7%**, hallucination rate **74.2%**, index **-29.5%** (AA via BenchLM — poor honesty profile)
- MMLU-Pro (Vals): **77.2%**
- BenchLM composite: **51.44/100, #86 of 645** (36 of 618 benchmarks covered)

Coding:

- SWE-Bench Pro (public): **52.4%** (official — only 2 points under the mini)
- SWE-bench (Vals): **69.8%**
- LiveCodeBench (Vals): **84.0%** (higher than the mini's 81.5%)
- Terminal-Bench 2.0: **46.3%** (official)
- Vibe Code Bench (Vals): **26.10%**
- AA-SciCode: **47.2%**; AA Coding Index: **56.1%** (AA via BenchLM)
- OmniDocBench 1.5 (no tools, edit distance — lower is better): **0.2419** (official — weak document parsing)

Long context:

- OpenAI MRCR v2 8-needle 64K-128K: **44.2%**; 128K-256K: **33.1%** (official)
- GraphWalks BFS 0K-128K: **73.4%**; parents 0-128K accuracy: **50.8%** (official)

### Normalized scores (1–100)

- **Tool use: 55/100.** Official mid-band: TB2.0 46.3% / TB2.1 41.6% with a surprisingly strong MCP Atlas 56.1% and τ2 92.5%, but OSWorld 39.0% and AA agentic indices (17.7% Agentic Index, 21.8% GDPval-AA normalized) show the small-model ceiling. Capped by weak computer use and professional-agent performance.
- **Reasoning: 60/100.** GPQA 82.8% is high for the class, but ARC-AGI-2 5.7%, FrontierMath v2 ≤25.9%, CritPt 9.3%, and a 74.2% hallucination rate on Omniscience expose the depth and honesty limits. Capped by everything below the surface benchmark.
- **Context window: 64/100.** 400K nominal (family spec; BenchLM 400K), but measured MRCR falls to 44.2% at 64K-128K and 33.1% at 128K-256K, and GraphWalks parents accuracy is 50.8% even within 128K — the reliable window is a fraction of the spec. Capped accordingly.
- **Multimodal: 65/100.** Text + image in, text out with measured MMMU-Pro 66.1% (69.5% with Python; AA 65.4%) — image-in band (60-70), unremarkable but real vision.
- **Coding: 66/100.** SWE-Bench Pro 52.4% (official) nearly matches the mini, LiveCodeBench 84.0% and SWE-bench 69.8% (Vals) are strong for the size, but Terminal-Bench 46.3%, Vibe 26.1%, and FrontierCode-class tasks expose the floor. Capped by agentic-coding and open-ended-coding weakness.
- **Cost efficiency: 94/100.** $0.20/$1.25 per MTok (Zen cached $0.02) is cheaper than the ~$0.60/$2.20 ≈ 92 bracket and not far from the ~$0.10/$0.20 ≈ 97-99 tier — among the best value per token on Zen for light tasks.
- **Overall Score: 62/100.** Half-up mean of the five quality dims: (55 + 60 + 64 + 65 + 66) / 5 = 62.0 → 62. Cheapest 5.4-family executor for classification, extraction, ranking, and simple coding subtasks — never the driver model.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01
- Method: public internet research (OpenAI official mini/nano announcement + evals tables, BenchLM aggregator rows with sources, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
