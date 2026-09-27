# Gemini 3.6 Flash — findings by Qwen 3.8 27B

- Source: Google/gemini-3.6-flash
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's advanced 3.6 Flash model with improved reasoning; fast, well-priced, multimodal; proprietary, now superseded by Gemini 3.7 Flash.
- **Provider / access:** Google API (4 providers per Artificial Analysis); free tier available on Google AI Studio and OpenCode Zen.
- **Release / knowledge:** 2026-07-21 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `google/gemini-3.6-flash` (Free tier on Zen; paid at $0.75/$3.75).
- **Context window:** 1M tokens (Artificial Analysis technical specs).
- **Modalities:** Text, image, audio (speech), video in; text out (AA verified); reasoning yes; tool calls yes; PDF input per repo meta.
- **Pricing (as of 2026-09-27):** Free tier (AI Studio / Zen, rate-limited); paid $0.75 in / $3.75 out per 1M on Google API (Artificial Analysis).
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase / GDPval-AA / AutomationBench-AA / Terminal-Bench 4.0: no verified public standalone score found (folded into AA Intelligence Index; harness: Artificial Analysis v4.3.2).
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public standalone score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found (included in AA Intelligence Index)
- LCR / MLCR: no verified public score found (AA-LCR included in Index)
- CritPt: no verified public score found (included in AA Intelligence Index)
- Artificial Analysis Intelligence Index: **34 / #64 of 211** (AA v4.3.2; median 26; 90M output tokens; 211.9 t/s, #13 speed; $0.93 per Index task)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode included in AA Index)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M context window confirmed; no long-context retrieval (MRCR/RULER/GraphWalks) reported.

### Normalized scores (1–100)

- **Tool use: 68/100.** AA Intelligence Index 34 (#64/211, upper mid-band) with agentic evals in the composite; 211.9 t/s speed helps, but no direct TB2.1/Tau3 public numbers.
- **Reasoning: 67/100.** Index 34 sits at the top of methodology's mid-band (Index 20–35 → 55–65); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 90/100.** AA verifies text + image + speech + video in, text out; audio/video input puts it in the 90–100 band, capped at 90 for text-only output.
- **Coding: 68/100.** Composite (Index 34) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 100/100.** Evaluated Free tier = $0 (time-limited, rate-limited; traffic may feed product development on AI Studio). Paid fallback $0.75/$3.75 would score ~97.
- **Overall Score: 78/100.** (68 + 67 + 95 + 90 + 68) / 5 = 77.6 → 78. Best fit: fast, free, multimodal 1M-context work at high volume; step up to 3.7 Flash for more intelligence.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
