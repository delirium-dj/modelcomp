# Nemotron 3 Ultra Free — findings by GLM 5.3

- Source: NVIDIA (`opencode/nemotron-3-ultra-free`, base `nvidia/nemotron-3-ultra-550b-a55b`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** The free OpenCode Zen tier of NVIDIA's Nemotron 3 Ultra (550B-A55B open-weights MoE) — a fast long-context agent model with 1M window and open weights. Top use case: zero-cost long-context agentic and orchestration work.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3-ultra-free` (OpenAI-compatible Chat Completions); base open weights `nvidia/nemotron-3-ultra-550b-a55b` on HF/build.nvidia.com.
- **Release / knowledge:** 2026-06-04 (models.dev registry for the free tier); knowledge cutoff February 2026 (registry `knowledge = "2026-02"`).
- **IDs:** `opencode/nemotron-3-ultra-free` (limited-time free tier on Zen).
- **Context window:** 1M context / 128K output (models.dev free-tier registry; matches base model's 1M window per BenchLM).
- **Modalities:** text in / text out (registry `input = ["text"]`); reasoning yes (interleaved reasoning field, no effort options on the free tier); tool calls yes; JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** Free — $0 in / $0 out / $0 cached read (models.dev + Zen pricing table). Caveat: NVIDIA free endpoints are trial-use — sessions are logged for security and product-improvement purposes; do not submit personal or confidential data (Zen privacy note).
- **Architecture:** open weights (BenchLM lists Open Weight; AA Openness Index 83.3); 550B total / 55B active (MoE, per NVIDIA's public naming); parameters verified via base model ID.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.4%** (BenchLM; Vals variant 50.9%)
- Terminal-Bench Hard: **36.4%** (BenchLM)
- Tau3-Bench: **70.9%** (BenchLM); Tau2-Bench: **83.3%** (BenchLM)
- GDPval-AA: **1091 Elo** (BenchLM; normalized field 33.1% — mid band)
- PinchBench: **90.0%** (BenchLM)
- BrowseComp: **44.4%** (BenchLM)
- AA Harvey LAB: **81.7%** (BenchLM)
- AA Agentic Index **21.7%**, AA-AnalystAgent **6.3%**, AA EnterpriseOps-Gym **28.9%** (BenchLM)
- Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (BenchLM; AA-GPQA 86.7%, Vals 86.1%)
- HLE: **26.7%** (BenchLM; AA-HLE 28.4%; with-tools 37.4%)
- LCR / MLCR: AA-LCR **67.0%** (BenchLM); MLCR no verified public score found
- CritPt: **3.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **22.9** (BenchLM)
- Omniscience: Index **-0.4**, Accuracy **21.6%**, hallucination-rate field **29.7%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- MMLU-Pro **86.8%**, MMLU-ProX **83%**, IFBench **81.7%**, AA-IFBench **81.4%**, LongBench v2 **61.9%** (BenchLM)

Coding:

- SWE-bench Verified: **71.9%** (BenchLM)
- LiveCodeBench v6: **89.0%** (BenchLM); LiveCodeBench (Vals) **86.0%** (BenchLM)
- SWE Multilingual: **67.7%** (BenchLM); SWE-bench (Vals) **69.0%** (BenchLM)
- SciCode **44.6%** / AA-SciCode **40.3%** / AA Coding Index **49.3%** (BenchLM)
- Vibe Code Bench / DeepSWE: **no verified public score found**
- Design Arena Website Elo: **1149** (BenchLM)

Long context:

- AA-LCR 67.0% and LongBench v2 61.9% (BenchLM) at the 1M window; no MRCR/RULER per-length table — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 76/100.** τ³-bench 70.9%, τ² 83.3%, PinchBench 90% and AA Harvey LAB 81.7% are strong, but GDPval-AA 1091 is mid-band, TB 2.1 56.4% modest and AA Agentic Index 21.7% caps it below the frontier agents.
- **Reasoning: 72/100.** GPQA 87% is near-frontier with MMLU-Pro 86.8% solid, but HLE 26.7%, CritPt 3.1%, an AA Index of 22.9 and a negative Omniscience Index (-0.4) hold it mid-band.
- **Context window: 94/100.** 1M verified on the free tier = ≥1M tier; moderate long-context reasoning (AA-LCR 67%, LongBench v2 61.9%) keeps it off the top of the band.
- **Multimodal: 15/100.** Text in/out only on the evaluated tier (per template: 15 if text-only).
- **Coding: 72/100.** SWE-bench Verified 71.9% and LiveCodeBench 86–89% are respectable, but SciCode ~44%, AA Coding Index 49.3% and TB 2.1 56.4% sit below the frontier.
- **Cost efficiency: 100/100.** $0 in/out with open weights for self-hosting — but flagged: NVIDIA free endpoints log session data for product improvement (trial terms); not for confidential workloads.
- **Overall Score: 66/100.** Half-up mean of the five quality dims (76+72+94+15+72)/5 = 65.8 → 66 — the best free 1M-context orchestration/long-agent pick with open weights; text-only I/O and mid knowledge reliability are the limits.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, models.dev Zen registry, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
