# QoDuck - findings by Big Pickle

- Source: Alibaba/Qoder (stealth)/QoDuck
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** QoDuck
- **Short description:** Stealth coding model shipped inside Alibaba's Qoder desktop IDE on 2026-11-07, widely suspected to be an early Qwen 4 checkpoint. It runs repository-scale refactors and migrations with adaptive thinking; the underlying identity has not been disclosed.
- **Provider / access:** Qoder desktop (`qoder/lmodel` in ModelDial's harness); free daily preview allowance for individual users from 2026-11-07, with Credit rate cut from 0.5x to 0.0x inside that allowance.
- **Release / knowledge:** Preview 2026-11-07; knowledge cutoff not published.
- **IDs:** `qoder/qoduck` (Qoder UI label; no standard public API model code)
- **Context window:** 1,048,576 total / 65,536 max output (Qoder product documentation).
- **Modalities:** Text and image in; text/code out. Adaptive thinking, tool use and multi-file editing inside Qoder.
- **Pricing (as of 2026-11-13):** Free preview allowance in Qoder desktop (0.0x credits); outside the allowance it consumes standard Qoder credits. No public per-token price.
- **Architecture:** Undisclosed stealth checkpoint (no parameter count, weights or license); suspected Qwen 4 family.

### Raw benchmarks found

> One independent, model-specific harness exists (ModelDial's private coding and
> reasoning evaluation). No academic benchmark card or vendor score was published
> for the stealth model.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- ModelDial composite (xhigh effort): **75.65 / 100**, rank **17 of 51** models
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding (ModelDial private coding suite, xhigh):

- Overall: **75.65**
- Backend engineering: **70**
- Frontend interaction: **80**
- Knowledge reasoning: **85**
- Visual/aesthetic: **64**
- Maintainability: **55**
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks curve; the 1M window is a product spec, not a measured retrieval result.

### Normalized scores (1-100)

- **Tool use: 72/100.** ModelDial's Backend 70 reflects agentic repository work, but with no Terminal-Bench/Tau3/MCP-Atlas evidence the score stays low-70s.
- **Reasoning: 73/100.** Knowledge reasoning 85 is strong, offset by the 75.65 composite and a total absence of GPQA/HLE/LCR numbers.
- **Context window: 95/100.** Verified 1,048,576-token window enters the 1M tier (95-100); no retrieval-at-length proof keeps it at the floor.
- **Multimodal: 70/100.** Text and image input with text/code output, but Visual/aesthetic 64 is the weakest measured dimension and there is no video or audio.
- **Coding: 70/100.** Frontend 80 and Backend 70 are solid, but Maintainability 55 is a clear ceiling for long-lived production code.
- **Cost efficiency: 100/100.** The evaluated access path is a $0 daily preview allowance (time-limited; not a standing free tier).
- **Overall Score: 76/100.** Half-up mean of (72 + 73 + 95 + 70 + 70) / 5 = 76.0. Best fit: free in-IDE refactors and frontend work while the stealth preview lasts; maintainability debt rises on large codebases.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-11-13
- Method: public internet research (Qoder product docs, ModelDial independent coding benchmark, stealth-model trackers); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [ModelDial — QoDuck coding benchmark, time & cost](https://modeldial.com/en/models/qoder/lmodel)
  - [Qoder docs — Qoduck free preview event](https://docs.qoder.com/events/qoduck-free)
  - [ModelDial — coding rankings](https://modeldial.com/en/leaderboard/coding)
- Future sources: add a new file next to this one, e.g. `QoDuck.md`, using the same headings.
