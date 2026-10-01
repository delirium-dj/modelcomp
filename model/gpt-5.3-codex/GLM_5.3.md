# GPT-5.3-Codex — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.3-codex`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's most capable agentic coding model at its 2026-02-05 release — state-of-the-art on SWE-Bench Pro and Terminal-Bench 2.0, "first model that was instrumental in creating itself", and the first model OpenAI classified High cyber capability. Base of the Codex family that GPT-5.4 later absorbed; sibling of the ultra-fast research-preview GPT-5.3-Codex-Spark.
- **Provider / access:** Codex app/CLI/IDE/web with paid ChatGPT plans; OpenAI Responses API. On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.3-codex`).
- **Release / knowledge:** released 2026-02-05. Knowledge cutoff not published.
- **IDs:** `gpt-5.3-codex`; Zen `opencode/gpt-5.3-codex`. No Free ID on Zen.
- **Context window:** 400K tokens (BenchLM model details).
- **Modalities:** text and image input (vision drives OSWorld results), text output; reasoning (xhigh in official evals); tool calls; interactive steering while working.
- **Pricing (as of 2026-10-01):** $1.75 / $14.00 per MTok in/out on Zen (cached read $0.175). No free tier.
- **Architecture:** proprietary, size undisclosed; co-designed for, trained with, and served on NVIDIA GB200 NVL72 systems; first model directly trained to identify software vulnerabilities; deployed with Trusted Access for Cyber safeguards (some elevated-risk requests route to GPT-5.2).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (official system card; new industry high at release)
- OSWorld-Verified: **64.7%** (official system card; **74.0%** with the original-resolution image API parameter per the GPT-5.4 announcement)
- GDPval (wins or ties): **70.9%** (official, matching GPT-5.2)
- τ²-bench: **86%** (Artificial Analysis via BenchLM)
- Cybersecurity CTF challenges (internal): **77.6%** (official)
- Gert Labs: **57.47%**; JobBench: **33.7%** (via BenchLM)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.5%** (AA via BenchLM); HLE: **42.5%** (AA via BenchLM)
- AA Intelligence Index: **32.5%**; AA-LCR: **83.3%**; AA-IFBench: **75.4%** (AA via BenchLM)
- CritPt: **16.9%** (AA via BenchLM)
- Omniscience: accuracy **52.9%**, hallucination rate **89.2%**, index **10.9%** (AA via BenchLM — poor honesty profile)
- BenchLM composite: **62.46/100, #46 of 645** (22 of 618 benchmarks covered)

Coding:

- SWE-bench Verified: **85%** (official system card)
- SWE-Bench Pro (public): **56.8%** (official; state of the art at release)
- SWE-Lancer IC Diamond: **81.4%** (official)
- LiveCodeBench (Vals): **87.3%**; SWE-bench (Vals): **78.0%** (via BenchLM)
- SWE-Rebench: **58.2%**; Vibe Code Bench (Vals): **61.77%** (via BenchLM)
- AA-MMMU-Pro: **78.5%**; Design Arena Website: **1170** (OpenRouter via BenchLM)

Long context:

- MRCR / RULER / GraphWalks: no verified public score found for this model ID (400K window per BenchLM details)

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.0 77.3% was the industry high at release, OSWorld-Verified 64.7→74.0% is strong computer use, τ²-bench 86% and GDPval 70.9% are solid professional-agent results. Capped by Gert Labs 57.5% / JobBench 33.7% soft spots.
- **Reasoning: 72/100.** GPQA Diamond 91.5% and HLE 42.5% clear the frontier bars, but CritPt 16.9%, a 89.2% Omniscience hallucination rate, and AA Intelligence Index 32.5% expose shallow general-reasoning depth. Capped by honesty and critique weakness.
- **Context window: 74/100.** 400K nominal (BenchLM) sits in the 200K-500K band; no verified long-context retrieval scores exist for this ID. Capped by unverified retrieval quality.
- **Multimodal: 68/100.** Text + image in (vision confirmed by OSWorld and MMMU-Pro 78.5%), text out; no video/audio input. Image-in band (60-70), upper half for the class.
- **Coding: 88/100.** The specialist profile: SWE-bench Verified 85% (system card), SWE-Bench Pro 56.8% (then-SOTA), Terminal-Bench 2.0 77.3%, LiveCodeBench 87.3%, SWE-Lancer 81.4% — near-frontier agentic coding with strong Vibe (61.77%). Capped by SWE-Rebench 58.2% and the generalists (GPT-5.4/5.5) that later surpassed it.
- **Cost efficiency: 63/100.** $1.75/$14.00 per MTok (Zen cached $0.175) — between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 brackets, dragged toward the latter by the 3.3x output price; the model's token efficiency (fewest tokens per task at release, official) recovers some value.
- **Overall Score: 77/100.** Half-up mean of the five quality dims: (85 + 72 + 74 + 68 + 88) / 5 = 77.4 → 77. The Feb-2026 coding-agent specialist: still a top terminal/SWE workhorse, now folded into the GPT-5.4 line for general work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01
- Method: public internet research (OpenAI launch announcement + system card rows via BenchLM, aggregator rows with sources, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
