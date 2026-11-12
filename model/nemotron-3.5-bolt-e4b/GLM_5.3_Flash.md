# Nemotron 3.5 Bolt E4B — findings by GLM 5.3 Flash

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt E4B 4GB (release name; "E4B" = ~4B effective; a full-precision `NVIDIA-Nemotron-3.5-Bolt-E4B-BF16` exists)
- **Short description:** NVIDIA's compact open SLM for ~4GB-class edge conversational agents: Gemma-4-E4B-it post-trained by NVIDIA for multi-turn tool use, instruction following and grounding — leading its class on conversation/persona benchmarks (Brevity 82.5, RoleBench 67.0) and out-drinking peers in token efficiency (up to ~80% fewer tokens).
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, Q4_K_M GGUF 6.18 GB; BF16 15.88 GB; OpenMDW-1.1 license); build.nvidia.com/nvidia/nemotron-3.5-bolt-e4b; Jetson AI Lab; llama.cpp/Ollama/LM Studio.
- **Release / knowledge:** Released 2026-10-23 (HF + build.nvidia.com). Knowledge cutoff not stated on the found surfaces.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` (HF); `nvidia/nemotron-3.5-bolt-e4b` (build.nvidia.com).
- **Context window:** 64K (Jetson AI Lab model page).
- **Modalities:** Text in; text out. Reasoning + non-reasoning modes via `enable_thinking`; optional `conversational_mode`; multi-turn tool use native; DFlash drafter companion for speculative decoding.
- **Pricing (as of 2026-11-01):** Free open weights (OpenMDW-1.1 — note: not yet OSI-approved per launch-day reporting).
- **Architecture:** 8B total / 4B effective parameters; post-trained from Gemma-4-E4B-it (Gemma-4 lineage carries through); Q4_K_M release named for its ~4-GB running-memory target.

### Raw benchmarks found

(all NVIDIA-measured on the NeMo Gym harness, model card; reasoning mode except RoleBench/EQ-Bench/RULER)

Conversation & persona:

- Brevity Bench: **82.5** (peers: Gemma-4-E4B 80.0, Qwen3.5-4B 75.3, Nano-4B 73.6)
- RoleBench win %: **67.0** (Q4_K_M build 71.2 — best in table)
- RoleMRC: **80.6**; MultiChallenge: **53.1** (Q4 build 55.6); EQ-Bench v3: **39.4**

Multi-turn tool use:

- BFCL-v3: **68.5**; ToolSandbox: **68.8** (Q4 74.1); When2Call-MT: **63.4**; Tau2-Bench: **55.1** (vs Qwen3.5-4B 75.1 — the one heavy loss)

Instruction & control:

- IHEval: **84.8**; StructEval-T: **80.4** (Q4 80.0); IFBench: **63.8**; InverseIFEval: **46.8**; AgentIF: **25.8**

Long context / RAG:

- RULER (64K): **87.0**; LongMemEval: **72.1**; LongBench v2 (48K): **50.5**; SysBench: 67.9; GaRAGe: **42.6** (class-leading); RAGTruth: 77.6; RelyToolBench: **63.2** BF16 / **69.3** Q4

Serving (NVIDIA + independent):

- Q4_K_M: 4.2–5.0 GB runtime VRAM; RTX 5070 ~133 tok/s; Jetson Orin Nano 8GB 15.5 tok/s; **independent caveat** — an 8GB Jetson Orin Nano Super failed to load the 6.18 GB Q4_K_M file OOM; DGX Spark 64K-context measured 8.7 GiB total
- Independent RTX-5090 head-to-head: Bolt passed 12/18 runs vs Gemma-4-E4B's 11, in ~113 s vs 662 s (~6× faster end-to-end)

General reasoning/coding benchmarks (GPQA/MMLU/SWE-class): none published — this is a small focused SLM; vendor deliberately rebuilds the suite around conversation/tooling/edge serving.

### Normalized scores (1–100)

- **Tool use: 63/100.** Strong tool-call correctness (BFCL 68.5, ToolSandbox 68.8–74.1, When2Call 63.4) with real multi-turn grounding focus; capped by the Tau2-Bench collapse (55.1 — the most agentic multi-turn customer-task board) and AgentIF 25.8.
- **Reasoning: 50/100.** No general-knowledge or frontier-exam rows exist; measured evidence is instruction-level (IHEval 84.8, InverseIFEval 46.8) rather than reasoning — scored on what exists, marked unmeasured elsewhere.
- **Context window: 55/100.** Verified 64K window with solid retrieval (RULER 87.0) and the best cross-session LongMemEval in class (72.1) — but 64K is modest and LongBench 50.5 is mid.
- **Multimodal: 10/100.** Text-only.
- **Coding: 45/100.** No published coding benchmark; community DGX-Spark testing showed 5/5 simple code-gen tasks — scored near the unverified floor with an anchor from that single informal test.
- **Cost efficiency: 95/100.** Free open weights engineered to run in ~4-5 GB GPU memory on consumer/Jetson hardware — near the local-deployment floor; dinged for the OOM-on-8GB-Jetson loading issue and the license not yet OSI-approved.
- **Overall Score: 45/100.** Mean of the five quality dims (63+50+55+10+45)/5 = 44.6 → 45. Best fit: voice/device assistants, personas and robots on 4-8GB edge hardware — intelligence-per-GB, not frontier capability.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (official NVIDIA research page + HF model card tables, Jetson AI Lab run guide, independent launch-day community testing); scores are normalized 1–100 interpretations, not official vendor scores. All benchmark rows are NVIDIA-measured (NeMo Gym) — labelled; general-reasoning absence is stated, not backfilled. **Supersession note:** this file supersedes `GLM_5.3_Flash.md.excluded` (2026-10-16), whose twin verdict — "unreleased, re-research after the 2026-10-23 release" — prescribed exactly this follow-up; the twin was correct at its date and awaits user-confirmed deletion.
- Reference URLs:
  - [NVIDIA — Nemotron 3.5 Bolt E4B 4GB announcement (benchmark tables, token-efficiency claims)](https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-E4B-4GB/)
  - [Hugging Face — nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB (full BF16/Q4 comparison table)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)
  - [Jetson AI Lab — Nemotron 3.5 Bolt E4B 4GB run page (64K ctx, Q4_K_M, llama.cpp)](https://www.jetson-ai-lab.com/models/Nemotron-3-5-Bolt-E4B-4GB/)
  - [AI/TLDR — release summary (BF16 + 4GB Q4_K_M, harness list)](https://ai-tldr.dev/models/nemotron-3-5-bolt-e4b/)
  - [Nohumans — independent launch-day testing roundup (OOM on 8GB Jetson, Tau2 gap, license status)](https://nohumans.jp/en/article/nvidia-4gb-nemotron-3-5-bolt-1-8gb-jetson-20261025-dlzj)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `GLM_5.3_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_5.3_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Nemotron 3.5 Bolt E4B — findings by GLM 5.3 Flash

- Source: NVIDIA (`Nemotron-3.5-Bolt-E4B`, announced 2026-10-15, ships 2026-10-23)
- Archived date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> SELF-EXCLUSION (per `model-report-TEMPLATE.md` / `tasks/research.md` Rule 9):
> zero verified public benchmark numbers exist for this exact model/ID — the
> model has not shipped. NVIDIA's own announcement schedules it for
> 2026-10-23 ("Bolt E4B coming Oct. 23"), and independent trackers confirm
> the gap (BenchLM: "no source-displayable benchmark rows yet"). This file is
> saved as `.md.excluded` with notes only; no scores are claimed.

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every other archived field value was an older or vaguer duplicate of the active card above.

## Raw benchmarks found

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
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
