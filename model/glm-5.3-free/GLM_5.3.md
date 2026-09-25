# GLM 5.3 Free — findings by GLM 5.3

- Source: Z.AI (`opencode/glm-5.3-free`, base `glm-5.3`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** The free OpenCode Zen promotional tier of Z.AI's flagship open-weights GLM-5.3 — a top-tier agentic coding and tool-use model. Top use case: fast agentic coding and multi-step tool execution at $0.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-free` (OpenAI-compatible Chat Completions); base model also on Zen paid tier `opencode/glm-5.3` and as open weights `zai-org/GLM-5.3` (HF model card).
- **Release / knowledge:** GLM-5.3 is current as of 2026-09 (BenchLM sibling of GLM-5.2); exact release date not re-verified. Knowledge cutoff not stated publicly.
- **IDs:** `opencode/glm-5.3-free` (free promotional tier — note: absent from the 2026-09-25 Zen endpoint snapshot; curated metadata still lists it as available — re-verify before relying on it).
- **Context window:** 204K on the evaluated free tier (curated metadata; the base GLM-5.3 model carries a 1M native window per BenchLM).
- **Modalities:** text in / text out (text-only; Z.AI ships vision on the separate GLM-5V-Turbo line); reasoning yes; tool calls yes; JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** free promotional Zen tier ($0) per curated pricing note; paid base tier is $1.40/$4.40 with $0.26 cached read per 1M (Zen pricing table).
- **Architecture:** open weights; parameters undisclosed in the sources found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (BenchLM; Vals variant 71.5% — at the 88%+ frontier reference)
- GDPval-AA: **1769 Elo** (BenchLM; normalized field 57.3% — clears the 1750+ frontier reference)
- Tau3-Banking: **50.3%** (BenchLM, AA-run — at the 50%+ frontier reference)
- Toolathlon-Verified: **73.0%** (BenchLM)
- AA Agentic Index: **53.4%** (BenchLM); AA AutomationBench **62.2%** (BenchLM)
- AA Briefcase Elo: **1525** (BenchLM); AA EnterpriseOps-Gym **36.4%** (BenchLM)
- AutomationBench: **48.2%** (BenchLM); Agents' Last Exam **28.5%** (BenchLM)
- Terminal-Bench 3.0: **28.3%** (BenchLM — weak on the newest terminal suite)
- CyberGym **84.5%**, ExploitGym **15.0%** (BenchLM)
- Claw-Eval / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (BenchLM, AA-GPQA; Vals variant 88.1%)
- HLE: **62.5% with tools** (BenchLM); AA-HLE **42.3%** (BenchLM)
- LCR / MLCR: AA-LCR **79.7%**, MLCR-AA **48.3%** (BenchLM)
- CritPt: **19.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **44.8** (BenchLM)
- Omniscience: Index **14.3**, Accuracy **33.9%**, hallucination-rate field **29.6%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- MMLU-Pro (Vals): **86.8%** (BenchLM)

Coding:

- SWE-bench (Vals): **95.4%** (BenchLM); SWE-bench Verified official: **no verified public score found**
- FrontierSWE: **78.1%** (BenchLM; FrontierSWE v2 30.2%)
- Terminal-Bench 2.1: **88.2%** (BenchLM)
- DeepSWE: **66.9%** (BenchLM)
- LiveCodeBench (Vals): **80.5%** (BenchLM)
- AA Coding Index **74.8%**, AA-SciCode **59.0%**, NL2Repo **58%**, OpenHarmony **60.8%**, VulcanBench v3 **78.3%** (BenchLM)
- ProgramBench **19.0%**, sweMarathon **42.5%**, PostTrain Bench **39.8%** (BenchLM)
- Design Arena Website Elo: **1312** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR 79.7% and MLCR-AA 48.3% (BenchLM) at the base model's 1M window; the evaluated free tier caps at 204K; no MRCR/RULER per-length table — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB 2.1 88.2%, GDPval-AA 1769, Tau3-Banking 50.3% all sit at or above the methodology's frontier references, with Toolathlon 73% and AA Agentic Index 53.4% strong; capped by AutomationBench 48.2%, Agents' Last Exam 28.5% and the weak Terminal-Bench 3.0 28.3%.
- **Reasoning: 88/100.** GPQA Diamond 91.7% and HLE-with-tools 62.5% clear the frontier lines, AA Index 44.8 is upper-tier; CritPt 19.1% and a weak Omniscience Index (14.3) hold it just under 90.
- **Context window: 70/100.** Evaluated free tier caps at 204K (200K anchor = 70); the base model's 1M window is not what this tier serves.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 90/100.** SWE-bench (Vals) 95.4%, TB 2.1 88.2%, FrontierSWE 78.1%, DeepSWE 66.9% and AA Coding Index 74.8% are frontier-adjacent; weak spots (ProgramBench 19%, sweMarathon 42.5%) keep it from 95.
- **Cost efficiency: 100/100.** $0 promotional tier = 100 by the methodology; flagged: the free ID is missing from the current Zen endpoint snapshot (2026-09-25), so the tier may be rotational — verify before committing workflows.
- **Overall Score: 71/100.** Half-up mean of the five quality dims (92+88+70+15+90)/5 = 71.0 — the strongest free-tier agentic coding value found; its ceiling is the 204K tier cap and text-only I/O.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, OpenCode Zen docs, curated platform metadata); scores are normalized 1–100 interpretations, not official vendor scores. Note: the researcher is itself the GLM-5.3 model; all scores above are drawn from third-party measured data (BenchLM), not self-assessment.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
