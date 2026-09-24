# GLM 5.3 — findings by Mimo v2.6 Flash

- Source: Z.ai/GLM-5.3
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 (GLM-5.3)
- **Short description:** Z.ai's August 2026 flagship open-weights reasoning MoE for complex software engineering, long-horizon agents and emergent cybersecurity work; same base model as GLM-5.2 with all gains from post-training. Not a variant of `GLM-5.3-Flash` (that one is a separately trained 320B-A18B hybrid-attention base) — this is the 744B-A40B flagship.
- **Provider / access:** Z.ai API Platform (`z-ai/glm-5.3`, GLM Coding Plan), OpenCode Zen `opencode/glm-5.3`, OpenRouter `z-ai/glm-5.3`, Fireworks `fireworks/glm-5p3`, Together `glm-5-3`. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-08-14 (Z.ai blog); knowledge cutoff not published.
- **IDs:** `opencode/glm-5.3` on Zen — **paid only, no Free ID** (`noFreeId: true`); also `z-ai/glm-5.3`, `zai-org/glm-5.3` (Hugging Face).
- **Context window:** 1,048,576 tokens advertised by Z.ai docs; OpenRouter and ModelCap list 1,310,720 tokens after a 2026-09-12 listing update. Max output 128K (Z.ai docs) / up to 1,048,576 completion tokens (OpenRouter) / 131K (ModelCap) — verified from provider catalog listings, not a retrieval test.
- **Modalities:** text in; text out; reasoning always on (`reasoning_effort` = low/high/max, default max, disabling thinking no longer supported — breaking change vs GLM-5.2); tool calls; JSON mode. **No image/video/PDF input** — text-only.
- **Pricing (as of 2026-09-25):** $1.40 in / $4.40 out / $0.26 cached read per 1M (Z.ai list rate live from 2026-08-19); OpenRouter realized average $0.77 in / $2.43 out; batch routes $0.70 / $2.20. No free tier on Zen.
- **Architecture:** 744B total / 40B active MoE (753.3B cited by Artificial Analysis / AI Atlas); FP8 and BF16 checkpoints on Hugging Face; weights released under a **restricted, model-specific license** (ModelCap, 2026-09-19) after a staged security review — GLM-5.2's plain MIT terms do not automatically carry over.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Z.ai launch chart, Claude Code 2.1.207 harness) / **83.9%** (Artificial Analysis independent run, Terminus 2, 2026-08-19) / 71.5% (vals.ai)
- Terminal-Bench 3.0: **28.3%** (Z.ai, avg@3, Claude Code max effort) — Terminal-Bench 4.0: **41.8%** #16 of 26 (Laude Institute board, Claude Code · Max, 2026-08-14)
- DeepSWE v1.1: **66.9%** (Z.ai) / **69.0%** #4 of 18 (deepswe.datacurve.ai independent, 2026-08-26)
- Toolathon-Verified: **73.0%** (Z.ai — the one tracked figure still vendor-run)
- GDPval-AA: **56.7%** (Elo **1769**) (Artificial Analysis)
- Tau3-Banking (AA): **50.3%** (Artificial Analysis)
- Agents' Last Exam (CLI split, 105 tasks): **28.5%** (Z.ai)
- AutomationBench: 48.2% (Z.ai) / **62.2%** (AA); AA Agentic Index: **53.4**
- SWE-Marathon v1.1: 42.5% (Z.ai); FrontierSWE: 78.1 (Proximal, 1M ctx); NL2Repo: 58.0 (all Z.ai)
- LMArena Agent: **3.1%** #18 of 46 (2026-09-15); LMArena Coding Elo **1524** #22 of 397
- Claw-Eval / ClawProBench: no verified public score found
- CyberGym 84.5%, ExploitBench 54.4%, ExploitGym 15.0% (Z.ai / AA — emergent security capability)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44.9** (v4.3, max effort) #20 of 162 (AA / ModelCap, 2026-09-08); an earlier 2026-08-18 AA run was reported as **60** on the prior index scale (ExplainX) — index versions are not comparable, do not mix
- GPQA Diamond: **91.7%** (Artificial Analysis) / 88.1% (vals.ai)
- HLE: **42.3%** no-tools (Artificial Analysis) / **62.5%** with tools (Z.ai, 300K ctx, GPT-5.6-luna judge)
- AA-LCR (long-context reasoning): **79.7%**; CritPt: **19.1%** (Artificial Analysis)
- AA-Omniscience: accuracy **33.9%**, non-hallucination rate **70.4%** (hallucination rate 29.6%)
- LiveBench overall: **76.1** (livebench.ai board, 2026-06-25 release)
- MMLU-Pro: 86.8% (vals.ai); BenchLM overall: **66.93/100** #28 of 491; ModelCap Index 81.6, rank #9 (2026-09-19)

Coding:

- SWE-bench Verified: **95.4%** (vals.ai, Mini-SWE-agent harness, rank 6 of 86, board 2026-08-19)
- LiveCodeBench: **80.53%** (vals.ai, 2026-08-20)
- AA-SciCode: **59.0%**; Artificial Analysis Coding Index: **74.8**
- Z.ai Code Bench (private): **+50% over GLM-5.2** — no absolute figure published
- ProgramBench (Almost Solved): 19.0%; PostTrainBench: 39.8 (Z.ai)
- Vibe Code Bench: no verified public score found

Long context:

- 1,048,576–1,310,720 token window documented (Z.ai docs / OpenRouter / ModelCap); AA-LCR **79.7%** is the closest long-context reasoning proxy; MRCR / RULER / GraphWalks retrieval quality: **no long-context retrieval reported** for GLM-5.3 specifically.

### Normalized scores (1–100)

- **Tool use: 88/100.** Frontier-band tool evidence: TB2.1 83.9 independent / 88.2 vendor, Tau3-Banking 50.3, GDPval-AA 56.7 (Elo 1769) — the v1 frontier reference (TB2.1 ~88+, Tau3 ~50+, GDPval ~1750+) is essentially met. Capped below 90 by LMArena Agent 3.1% (#18/46), AA Agentic Index 53.4, Agents' Last Exam 28.5 and a vendor-vs-independent TB2.1 spread of 71.5–88.2 across harnesses.
- **Reasoning: 84/100.** GPQA Diamond 91.7, HLE 42.3 no-tools (both at/near the frontier reference of GPQA 90+ / HLE 40+), AA-LCR 79.7, LiveBench 76.1. Capped by the AA Intelligence Index 44.9 (#20/162) sitting well under the 60+ frontier reference, CritPt 19.1 and Omniscience accuracy 33.9 (29.6% hallucination rate).
- **Context window: 95/100.** ≥1M tier = 95–100 per methodology; 1,048,576 (Z.ai) with listings up to 1,310,720. Not 100 because no ≥98% retrieval accuracy measured at 512K+ is published for this model (AA-LCR 79.7 is reasoning, not retrieval).
- **Multimodal: 15/100.** Text-only input/output (SemiAnalysis, Z.ai docs) → 10–20 band; no image/video/audio/PDF in.
- **Coding: 91/100.** Meets four of four verifiable frontier references (TB2.1 88.2 ≥85, SciCode 59.0 ≥55, Coding Index 74.8 ≥70, SWE-bench Verified 95.4 independent), plus LiveCodeBench 80.53. Capped by DeepSWE 66.9–69.0 still short of the 74+ frontier reference, plus the vendor-run-only status of the Toolathlon number and no Vibe Code Bench figure.
- **Cost efficiency: 87/100.** $1.40/$4.40 list with $0.26 cached sits right at the ~$1.25/$4.25 ≈ 88 anchor; OpenRouter realized $0.77/$2.43 and $0.70/$2.20 batch routes push it slightly higher than list, no free tier on Zen.
- **Overall Score: 75/100.** (88 + 84 + 95 + 15 + 91) / 5 = 74.6 → 75 — the strongest open-weights coding/agent pick at mid-tier pricing; choose it over GLM-5.2 for terminal/long-horizon work, but reach for a multimodal or higher-index frontier model when vision input or factual reliability matters.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: fresh public internet research (Z.ai blog and docs, Hugging Face model card, Artificial Analysis, vals.ai, livebench.ai, deepswe.datacurve.ai, The Model Gap, SemiAnalysis, OpenRouter/ModelCap catalogues); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
