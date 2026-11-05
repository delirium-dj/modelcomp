# Gemini 4 Carbon — findings by Big Pickle

- Source: Google DeepMind/Gemini 4 Carbon (`opencode/gemini-4-carbon`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's frontier model aimed at cybersecurity and long-horizon agentic coding, launched with a gated "cyber defender" rollout. It is a distinct Gemini 4 sibling; Gemini 4 Argon is the general-access sibling, not an alias.
- **Provider / access:** OpenCode Zen `opencode/gemini-4-carbon`; native Google-shaped endpoint `https://opencode.ai/inference/google/v1beta/models/gemini-4-carbon`. Multimodal chat request, text out.
- **Release / knowledge:** October 2026 (public evaluation pages dated 2026-10-28); knowledge cutoff not published.
- **IDs:** `opencode/gemini-4-carbon` (no Free ID on Zen; paid only)
- **Context window:** 1,048,576 input / 1,048,576 output (vendor card; `meta.json` says "1M / 1M out")
- **Modalities:** text, image, speech/audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-11-05):** introductory $2.00/$10.00 per 1M in/out; standard $4.00/$20.00; cached input $0.20 (95% off)
- **Architecture:** proprietary (Google DeepMind); no parameter count published

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (**AA**): **65.2%** (Artificial Analysis, via BenchLM)
- AutomationBench (**agentic**): **53.9%** (BenchLM)
- OSWorld 2.1 (**computer use**): **81.5%** (BenchLM)
- GDPval-AA (**economic value**): **1733 Elo** (Artificial Analysis)
- AA Briefcase (**enterprise agent**): **1611** (Artificial Analysis)
- CWE-bench (**security**): **71%** (BenchLM)
- ExploitGym (**security**): **53.5%** (BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **69.1%** on HLE-Diamond (vendor card, per `meta.json`)
- LCR / MLCR: **79.3%** AA-LCR (Artificial Analysis)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **60 (#1 of 66) / 88.79 (#1 of 1014)**
- Omniscience Accuracy / Hallucination Rate: **58.3% / 11.4%**

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- SEC-bench Pro: **88.2%** (vendor card, per `meta.json`)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- FrontierSWE v2: **61.2%**; FrontierCode 2.0: **40%** (BenchLM)
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- GraphWalks BFS at 256K-1M: **96.2%** (vendor card)

### Normalized scores (1-100)

- **Tool use: 91/100.** Terminal-Bench 4.0 65.2%, OSWorld 81.5%, GDPval-AA 1733 and CWE-bench 71% are frontier-grade; the score is capped by undisclosed MCP-Atlas/Toolathlon results.
- **Reasoning: 94/100.** HLE-Diamond 69.1%, AA Intelligence Index 60 (#1 of 66) and AA-LCR 79.3% are top-tier; missing GPQA and CritPt keeps it below a perfect score.
- **Context window: 98/100.** 1M input and 1M output with 96.2% GraphWalks retrieval out to 1M; just under the 98% retrieval threshold for a full 100.
- **Multimodal: 90/100.** Text, image, speech and video input; text-only output, so no audio/image generation.
- **Coding: 91/100.** SEC-bench Pro 88.2% and FrontierSWE v2 61.2% are excellent; FrontierCode 2.0 at 40% shows the remaining gap on the hardest repo-level tasks.
- **Cost efficiency: 56/100.** Standard $4/$20 per 1M is mid-premium; the $2/$10 introductory tier is temporary and the cached-input discount only helps repeat prompts.
- **Overall Score: 93/100.** Mean of (91+94+98+90+91)/5 = 92.8, rounded to 93. Best fit: gated cyber-defense and long-horizon agentic coding where 1M output matters; not a budget generalist.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public internet research (vendor launch material, BenchLM, Artificial Analysis, Vals AI); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)
  - [BenchLM — Gemini 4 Carbon](https://benchlm.ai/models/gemini-4-carbon)
  - [Vals AI — Gemini 4 Carbon](https://www.vals.ai/models/google_gemini-4-carbon)
  - [Artificial Analysis — model benchmarks](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [OpenCode Console model endpoints](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Gemini_4_Carbon_2.md`, using the same headings.
