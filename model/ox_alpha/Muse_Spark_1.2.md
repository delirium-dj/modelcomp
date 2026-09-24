# Ox Alpha (GLM-5.3 Flash) — findings by Muse Spark 1.2

- Source: Z.ai (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (GLM-5.3 Flash stealth)
- **Short description:** Anonymous free Stealth preview on OpenRouter (2026-08-20) fingerprinted as Z.ai GLM-5.3 Flash; 1M vision-capable reasoning model for coding and agentic work.
- **Provider / access:** OpenRouter `stealth/ox-alpha` (now resolved `z-ai/glm-5.3-flash`) via OpenCode Zen `z-ai/glm-5.3-flash` (Chat Completions)
- **Release / knowledge:** 2026-08-20 stealth preview; GLM-5.3 Flash family released 2026-08-14; knowledge cutoff not disclosed
- **IDs:** `z-ai/glm-5.3-flash` (Stealth `stealth/ox-alpha`; no Free tier beyond preview, now paid)
- **Context window:** 1,048,576 total (1M in / 131,072 out) — verified via OpenRouter listing and ox-alpha run site
- **Modalities:** Text, image, video in; text out; reasoning yes (mandatory, max/high/low); tool calls yes; JSON mode yes — no audio/PDF
- **Pricing (as of 2026-09-24):** Free during stealth preview $0/$0 (now GLM-5.3 Flash ~$0.40/$1.60 est.; preview free noted as training consent)
- **Architecture:** Proprietary MoE (GLM family, Zhipu AI)

### Raw benchmarks found

Agent / tool use:

- AutomationBench (Public): **no verified public score found** (no official score; GLM-5.3 stealth not on AA)
- Terminal-Bench 2.1 / 4.0: **no verified public score found** (not published for Ox Alpha)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found** (1M window demonstrated via listing, no MRCR)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (Artificial Analysis does not list Ox Alpha as of 2026-08-22 per glm5.app audit)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (community proxy below)
- LiveCodeBench v6: **28%** (independent community reproducible test per Decrypt/ox-alpha-ai.chat — notably weaker than subset headline)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE (113-task): **~63% full run, 80% 10-task subset** (community developer Ben Davis, Aug 21-23 2026 via Decrypt/techtimes; 80% initial 10-task subset superseded by ~63% full 113-task run, on par with GPT-5.6 Sol mid-tier; single-run unaudited, viral 80% = 8/10 variance ±10pp per task)
- Kingbench: **87.5%** (community day.dev test Aug 2026, non-standard, behind GLM-5.3 91.25%; methodology unaudited)
- OpenCode coding leaderboard: **#26** (community independent per ox-alpha.run)

Long context:

- 1M total window verified via OpenRouter listing; no MRCR/RULER at max window reported beyond listing demo

### Normalized scores (1–100)

- **Tool use: 62/100.** No official AutomationBench/TB verified; capped at 62 on community agent reports and 1M context tool support — lacks published Tau3/Claw-Eval/GDPval.
- **Reasoning: 65/100.** No HLE/CritPt/AA Index verified; Kingbench 87.5% non-standard and mixed hands-on reports cap at 65; 1M video support not reasoning isolation.
- **Context window: 96/100.** 1,048,576 total (131K out) verified; tier 95-100 for ≥1M but capped below 100 by no MRCR/RULER retrieval disclosure.
- **Multimodal: 75/100.** Text/image/video in → text out; video token-matched to GLM-5V-Turbo; capped below 90 by no audio/PDF and experimental stealth disclosure.
- **Coding: 71/100.** DeepSWE ~63% full run solid mid-tier near GPT-5.6 Sol but well below viral 80% subset headline; LCB v6 28% weak pull-down; capped by unaudited single-run and no SWE-bench Verified.
- **Cost efficiency: 100/100.** Free stealth preview $0/$0 (now GLM-5.3 Flash paid equiv. but preview free-tier scored as Free per methodology).
- **Overall Score: 74/100.** Mean of five non-cost dims (62+65+96+75+71)/5=73.8 → 74; best-fit stealth vision-coder — useful free 1M agent when preview active, not frontier leader.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (OpenRouter listing, ox-alpha.run forensics 2026-09-04, Decrypt 2026-08-24, techtimes, glm5.app, ox-alpha-ai.chat 2026-08-22, Artificial Analysis absence verified); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
