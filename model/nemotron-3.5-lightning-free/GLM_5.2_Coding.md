"# Nemotron 3.5 Lightning Free — findings by GLM 5.2 Coding

- Source: NVIDIA / OpenCode Zen (`nemotron-3.5-lightning-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** Free tier of NVIDIA's compact open 30B MoE (3B active params) execution model, built for high-volume, low-latency execution in always-on agents. Designed to pair with a frontier planner rather than act as one; NVIDIA's small-tier entry in the Nemotron 3.5 family.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3.5-lightning-free`) plus NVIDIA build.nvidia.com trial access (project meta). Open weights on Hugging Face (`nvidia/Nemotron-3.5-Lightning` per family naming).
- **Release / knowledge:** Nemotron 3.5 family current as of Sept 2026; exact Lightning release date not verified this session (NVIDIA pages render via JS and returned no text).
- **IDs:** `opencode/nemotron-3.5-lightning-free`; upstream `nvidia/Nemotron-3.5-Lightning`.
- **Context window:** 262,144 tokens native (project meta).
- **Modalities:** text in/out only (project meta).
- **Pricing (as of 2026-09-17):** Free on OpenCode Zen and NVIDIA trial tiers (project meta); paid API pricing not verified this session.
- **Architecture:** NVIDIA MoE transformer, 30B total / 3B active parameters, open weights (project meta; exact license not verified this session).

### Raw benchmarks found

Agent / tool use:

- No verified public score found — NVIDIA model pages and llm-stats returned no text-extractable benchmark tables this session; no Terminal-Bench / TAU-bench / Toolathon values published in extractable form

Reasoning / knowledge:

- No verified public score found — no GPQA / HLE / MMLU values extractable this session

Coding:

- No verified public score found — no SWE-bench / DeepSWE / LiveCodeBench values extractable this session

Long context:

- 262,144 native window verified via project meta; no MRCR/RULER retrieval values published — no verified public score found

Multimodal (input-side):

- Not applicable — text-only model per project meta

### Normalized scores (1-100)

- **Tool use: 65/100.** Purpose-built for always-on agent execution loops (stated design goal); 3B-active MoE keeps per-step cost low, but small capacity limits complex multi-tool orchestration; capped by zero extractable benchmark evidence.
- **Reasoning: 52/100.** 3B active parameters is a hard ceiling on frontier reasoning; designed as an executor, not a reasoner; no public reasoning scores found to dispute this.
- **Context window: 84/100.** 262,144 native tokens is generous for the compact class (most sub-50B models ship 128K or less); capped by unpublished retrieval evidence.
- **Multimodal: 20/100.** Text-only input/output.
- **Coding: 62/100.** Execution-tier coding (apply diffs, run tests, iterate) suits its agent-executor design; 3B-active capacity caps autonomous frontier coding; zero extractable public coding benchmarks.
- **Cost efficiency: 100/100.** Free on both OpenCode Zen and NVIDIA trial tiers; even paid, 3B-active MoE inference is among the cheapest per token in class.
- **Overall Score: 57/100.** Mean of five quality dims (65+52+84+20+62)/5 = 56.6 → 57. Best-fit: high-volume executor behind a frontier planner (NVIDIA's stated pairing); not a standalone reasoning model.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-09-17
- Method: public internet research (project meta as primary verified source; NVIDIA build.nvidia.com and llm-stats pages were JS-walled and yielded no text this session — benchmark fields therefore marked "no verified public score found" rather than estimated). Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings."