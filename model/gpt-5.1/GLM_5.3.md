# GPT-5.1 — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's reasoning-model refresh between GPT-5 and GPT-5.2 (late 2025) — a generalist "thinking" model that has since been leapfrogged by the 5.2-5.4 generations on every measured axis. Sibling of the GPT-5.1-Codex coding variants (deprecated from Zen 2026-07-23).
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`); Codex. On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.1`).
- **Release / knowledge:** released late 2025 (generation between GPT-5 and GPT-5.2); exact date not re-verified. Knowledge cutoff not published.
- **IDs:** `gpt-5.1`; Zen `opencode/gpt-5.1`. No Free ID on Zen.
- **Context window:** 200K tokens (BenchLM model details).
- **Modalities:** text and image input, text output; reasoning; tool calls.
- **Pricing (as of 2026-10-01):** $1.07 / $8.50 per MTok in/out (Zen; cached read $0.107). No free tier.
- **Architecture:** proprietary, size undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **81.9%** (Artificial Analysis via BenchLM)
- Gert Labs: **41.24%** (Gert Labs rankings via BenchLM)
- GDPval-AA: **930** raw / **15.6%** normalized (AA via BenchLM — weak)
- Terminal-Bench 2.1 / 2.0: no verified public score found
- OSWorld / BrowseComp / Toolathlon / MCP Atlas: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.3%** (AA via BenchLM)
- HLE: **28.5%** (AA via BenchLM)
- FrontierMath v2: **31.034%** (Tiers 1-3), **12.500%** (Tier 4) (Epoch AI via BenchLM)
- CritPt: **4.9%** (AA via BenchLM — very weak)
- AA Intelligence Index: **24.7%**; AA-LCR: **80.0%**; AA-IFBench: **72.9%** (AA via BenchLM)
- Omniscience: accuracy **37.7%**, hallucination rate **51.9%**, index **5.4%** (AA via BenchLM — better honesty than its 5.2-5.4 successors)
- BenchLM composite: **58.95/100, #53 of 645** (19 of 618 benchmarks covered)

Coding:

- SWE-bench Verified / Pro: no verified public score found for the base model (the GPT-5.1-Codex variants are separate models)
- Vibe Code Bench (Vals): **24.61%**
- AA Coding Index: **49.4%** (AA via BenchLM)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found (200K window per BenchLM details)

### Normalized scores (1–100)

- **Tool use: 52/100.** τ²-bench 81.9% is solid, but Gert Labs 41.2% and GDPval-AA 930/15.6% are weak, and no Terminal-Bench or OSWorld score exists for the base model. Capped by thin agentic evidence and weak professional-agent results.
- **Reasoning: 60/100.** GPQA 87.3% is near-frontier for its generation and the 51.9% hallucination rate is the best honesty profile of the 5.x reasoning line measured here, but HLE 28.5%, FrontierMath v2 ≤31%, and CritPt 4.9% expose the ceiling. Capped by shallow deep-reasoning and critique scores.
- **Context window: 70/100.** 200K tokens (BenchLM) — the conventional 200K anchor; no long-context retrieval rows exist for this ID.
- **Multimodal: 68/100.** Text + image in, text out with measured AA-MMMU-Pro 75.5% — respectable image understanding in the 60-70 image-in band.
- **Coding: 50/100.** The measured profile is weak: Vibe Code Bench 24.61% and AA Coding Index 49.4%, with no verified SWE-bench rows for the base model (its coding reputation lives in the separate 5.1-Codex variants). Capped by the absent SWE evidence and poor open-ended coding score.
- **Cost efficiency: 75/100.** $1.07/$8.50 per MTok (Zen cached $0.107) sits between the ~$0.60/$2.20 (≈92) and ~$3/$15 (≈60) brackets, leaning mid; cheaper inputs than GPT-5.2 but not enough to offset the capability gap.
- **Overall Score: 60/100.** Half-up mean of the five quality dims: (52 + 60 + 70 + 68 + 50) / 5 = 60.0 → 60. A transitional generalist with strong GPQA and comparatively good honesty — the 5.2+ line overtakes it across the board at similar prices.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01
- Method: public internet research (BenchLM aggregator rows with sources — AA, Epoch AI, Vals AI, Gert Labs — plus OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
