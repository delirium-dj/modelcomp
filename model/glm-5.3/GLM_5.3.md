# GLM 5.3 — findings by GLM 5.3

- Source: Z.AI (`glm-5.3`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.AI's flagship open-weights model (753B, GLM-5 family; same base as GLM-5.2 with all gains from post-training) — the most capable open-weights coding/agent model per its vendor table, with emergent cyber capabilities. Top use case: long-horizon agentic software engineering and tool execution.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3` (OpenAI-compatible Chat Completions); Z.AI API; open weights `zai-org/GLM-5.3` on Hugging Face (license `glm-5.3`, BF16/FP8); SGLang/vLLM/TokenSpeed/KTransformers/Unsloth serving recipes; Ascend NPU support.
- **Release / knowledge:** ~2026-08-27 (HF collection updated 29 days before 2026-09-25); technical report arXiv 2602.15763 "GLM-5: from Vibe Coding to Agentic Engineering". Knowledge cutoff not stated publicly.
- **IDs:** `opencode/glm-5.3` (no Free ID on the current paid listing; a free promotional sibling folder exists at `glm-5.3-free`).
- **Context window:** 1M tokens (BenchLM; vendor evals run NL2Repo and Agents' Last Exam at 1M context).
- **Modalities:** text in / text out (text-only; vision lives on the separate GLM-5V-Turbo line); reasoning yes (`reasoning_effort` low/high/max, default max; `clear_thinking` option); tool calls yes; JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $1.40 in / $4.40 out per 1M, cached read $0.26 (OpenCode Zen pricing table).
- **Architecture:** 753B parameters, `glm_moe_dsa` (MoE with sparse attention); same base model as GLM-5.2 — all gains from post-training; ~115 tokens/s reference (AA-sourced TPS in vendor ExploitGym footnote).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (BenchLM + HF vendor table + HF eval-results widget; at the 88%+ frontier reference; GPT-5.6 Sol 88.8 is the table best)
- Terminal-Bench 3.0: **28.3%** (BenchLM + HF vendor table — open-source SOTA claim; GPT-5.6 Sol 34.6 table best)
- GDPval-AA v2: **1769 Elo** (BenchLM; AA-run — table best over GPT-5.6 Sol 1730, Opus 4.8 1588, Fable 5 1743; normalized field 57.3%)
- Tau3-Banking: **50.3%** (BenchLM, AA-run — at the 50%+ frontier reference)
- Toolathlon-Verified: **73.0%** (BenchLM + HF eval-results; Kimi K3 76.5 table best)
- AutomationBench v1.0.6: **48.2%** (BenchLM + HF vendor table — table best)
- Agents' Last Exam (ALE-CLI): **28.5%** (BenchLM + HF vendor table; open-source SOTA claim; GPT-5.6 Sol 28.6)
- AA Agentic Index **53.4%**, AA Briefcase Elo **1525**, AA AutomationBench **62.2%**, AA EnterpriseOps-Gym **36.4%** (BenchLM)
- Claw-Eval / MCP-Atlas / SWE Atlas: **no verified public score found**

Cyber (vendor, anti-cheat harnesses documented):

- CyberGym: **84.5%** (HF vendor table — state-of-the-art claim; single-run Pass@1 over 1,507 tasks)
- ExploitGym (2h/6h): **105/130** (HF vendor table; GPT-5.6 Sol 216/293 much higher); ExploitBench **54.4%** (Fable 5 78.0)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (BenchLM, AA-GPQA — clears the 90% frontier reference; Vals variant 88.1%)
- HLE with tools: **62.5%** (BenchLM + HF vendor table; AA-HLE 42.3%)
- LCR / MLCR: AA-LCR **79.7%**, MLCR-AA **48.3%** (BenchLM)
- CritPt: **19.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **44.8** (BenchLM)
- Omniscience: Index **14.3**, Accuracy **33.9%**, hallucination-rate field **29.6%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- MMLU-Pro (Vals): **86.8%** (BenchLM)

Coding:

- SWE-bench (Vals): **95.4%** (BenchLM); SWE-bench Verified official: **no verified public score found**
- FrontierSWE: **78.1%** (BenchLM + HF vendor table, Proximal-run, 1M context; Fable 5 88.2 higher); FrontierSWE v2 **30.2%** (BenchLM)
- DeepSWE v1.1: **66.9%** (BenchLM + HF eval-results; GPT-5.6 Sol 72.7 higher)
- LiveCodeBench (Vals): **80.5%** (BenchLM)
- AA Coding Index **74.8%**, AA-SciCode **59.0%**, NL2Repo **58%** (at 1M context), VulcanBench v3 **78.3%**, OpenHarmony **60.8%** (BenchLM / HF vendor table)
- ProgramBench (almost solved) **19.0%**, SWE-Marathon v1.1 **42.5%**, PostTrainBench **39.8%** (BenchLM + HF vendor table — weak spots)
- Z.ai Code Bench: +50% over GLM-5.2 (vendor claim, in-house)
- Design Arena Website Elo: **1312** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR 79.7% and MLCR-AA 48.3% (BenchLM) at the 1M window; vendor runs long-horizon suites (ALE, NL2Repo) at 1M context; no MRCR/RULER per-length table — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 2.1 88.2%, GDPval-AA 1769 (table best), Tau3-Banking 50.3% and AutomationBench 48.2% all sit at or above the methodology's frontier references, with AA Agentic Index 53.4% elite; weak TB 3.0 28.3% and modest Toolathlon 73% keep it from 95+.
- **Reasoning: 88/100.** GPQA Diamond 91.7% and HLE-with-tools 62.5% clear the frontier lines with an AA Index of 44.8; CritPt 19.1%, MLCR 48.3% and a weak Omniscience Index (14.3) hold it just under 90.
- **Context window: 96/100.** 1M verified = ≥1M tier, exercised in vendor long-horizon runs; AA-LCR 79.7% solid but not ≥98%-retrieval grade.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 90/100.** SWE-bench (Vals) 95.4%, TB 2.1 88.2%, FrontierSWE 78.1%, DeepSWE 66.9%, LiveCodeBench 80.5% and CyberGym 84.5% SOTA make it the top open-weights coder found; ProgramBench 19%, SWE-Marathon 42.5% and TB 3.0 28.3% trail the closed frontier.
- **Cost efficiency: 88/100.** $1.40/$4.40 per 1M with $0.26 cached reads sits at the ~$1.25/$4.25 (~88) anchor; open weights add a $0 self-host path.
- **Overall Score: 76/100.** Half-up mean of the five quality dims (93+88+96+15+90)/5 = 76.4 — the leading open-weights agentic engineer at fair flagship pricing; the single biggest score drag is text-only I/O, with frontier ExploitGym/ProgramBench gaps second.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, official zai-org/GLM-5.3 Hugging Face model card and vendor benchmark table, OpenCode Zen pricing); scores are normalized 1–100 interpretations, not official vendor scores. Note: the researcher is itself the GLM-5.3 model; every number above is sourced from third-party or officially published vendor data, not self-assessment.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
