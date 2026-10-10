# Qwen 3.8 — findings by Space Bunny

- Source: Alibaba/Qwen (`Qwen/Qwen3.8-27B`; open-weight family)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (27B open-weight dense variant)
- **Short description:** Qwen's local-first native-multimodal dense model for coding, office automation, computer use, and long-horizon agent execution. Strongest published open-weights agentic-coding numbers in the dense 27B class, and it runs 4-bit in 24 GB of VRAM.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B` (Apache-2.0, ungated); GitHub `AlibabaCloud-Official/Qwen3.8-27B`; OpenAI-compatible local serving via vLLM, SGLang, and TokenSpeed. Practical community builds: `Qwen/Qwen3.8-27B-FP8` (the recommended local pick), plus GGUF/int4 and MLX (Apple Silicon) quantizations. VRAM ≈ **54 GB at fp16**; 4-bit fits 24 GB, though 32 GB is the comfort zone for 262K-context agentic sessions.
- **Not interchangeable with Qwen3.8-Max.** The hosted `qwen3.8-max` / `Qwen3.8-2.4T-A95B` is a different, 2.4T-total / 95B-active MoE. Its benchmark numbers are not attributed to this 27B checkpoint below.
- **Release / knowledge:** Hugging Face publish date 2026-08-13 (repo 2026-08-14); originally shown in the Qwen3.8 series announcement of 2026-08-02. No public knowledge cutoff disclosed.
- **IDs:** `Qwen/Qwen3.8-27B`; family references `Qwen3.8`, `Qwen3.8-27B-FP8`, `nvidia/Qwen3.8-27B-NVFP4`, `Inferact/Qwen3.8-27B-NVFP4`, `unsloth/Qwen3.8-27B-NVFP4`.
- **License:** **Apache 2.0 — now confirmed.** The prior pass noted this was not re-confirmed; the AlibabaCloud-Official GitHub README, BestLLMfor, and the HF model card all state Apache 2.0. This is a genuine differentiator: the larger Qwen3.8-Max open release ships under a *custom* `qwen3.8-max` license, and Qwen3.7-Plus is closed.
- **Context window:** **262,144 tokens natively**, extensible to **1,000,000** via static YaRN RoPE scaling (`rope_type: yarn`, `factor: 4.0`, `original_max_position_embeddings: 262144`). Qwen warns that static YaRN holds the factor constant regardless of input length, so it hurts shorter inputs — set `factor: 2.0` for ~524K workloads, and leave the default unless long context is actually needed. Official evals run at 256K, so 1M is a documented capacity claim, not a validated one.
- **Modalities:** Text, image, and **hour-scale video** input; text output. Thinking mode is **on by default** with `reasoning_effort` (`xhigh` / `medium` / `low`) and `preserve_thinking`. Tool calls, JSON/structured output, and OpenAI-compatible serving documented.
- **Pricing (as of 2026-10-10):** No first-party per-token price exists for the self-hosted checkpoint — the repository emphasizes local deployment. Third-party hosted routes list ~$0.42 / $3.00 per 1M, and the separate Qwen3.8-Max hosted endpoint is $2.00 / $6.00 (Singapore; $1.65 / $4.951 in Beijing, Frankfurt, Virginia, Tokyo, Hong Kong). Neither should be read as this checkpoint's price.
- **Architecture:** Dense **27B** (no MoE routing), hidden size 5,120, 64 layers. Hybrid attention arranged as **16 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN))** — only 16 of 64 layers run full softmax attention (GQA, 24 query heads / 4 KV heads, head-dim 256), the other 48 use Gated DeltaNet linear attention, which sharply cuts KV-cache growth at long context. Intermediate dimension 17,408; padded LM output 248,320; built-in MTP draft head trained with multiple steps; SwiGLU FFN, RMSNorm, vision encoder + multimodal projector. Newly trained base relative to Qwen3.6-27B; core config largely unchanged, with gains attributed to alignment/RL.

### Raw benchmarks found

All figures are **vendor-reported from the official Hugging Face model card** (Qwen's own comparison table). Independent replication for this 27B checkpoint remains thin — BenchLM independently echoes SWE-bench Pro 61.7 and Terminal-Bench 2.1 73.0. Harness notes are retained.

Coding:

- Terminal-Bench 2.1 (Terminus): **73.0%** — vs. Qwen3.6-27B 63.4, Qwen3.7-Plus 64.0, Opus 4.6 Max 78.2
- SWE-bench Pro (Claude Code harness, temp 1.0 / top_p 0.95, 256K ctx): **61.7%** — vs. Qwen3.6-27B 53.5, Qwen3.7-Plus 57.6
- LiveCodeBench v6: **90.3%** — vs. Qwen3.6-27B 83.9, Qwen3.7-Plus 89.6, Opus 4.6 Max 88.8
- QwenSWEBench (in-house, Claude Code harness, avg@3): **79.0%** — vs. Qwen3.6-27B 49.3, Opus 4.6 Max 63.8
- DeepSWE 1.1: **42.2%** — vs. Qwen3.6-27B 13.3 (a 3× jump)
- NL2Repo-Bench: **42.3%** — vs. Qwen3.6-27B 36.2, Qwen3.7-Plus 41.1, Opus 4.6 Max 47.6
- ExtractBench mean **88.00%** (short 94.68 / medium 87.54 / long 38.45)
- SWE-bench Verified: **not published**

Agent / tool use:

- OSWorld-Verified (computer use): **84.3%** — vs. Qwen3.6-27B 63.9, Qwen3.7-Plus 73.3, Opus 4.6 Max 72.7. Pastes every closed model on Qwen's own comparison table.
- WebArena-Verified (browser use): **64.8%** — vs. Qwen3.6-27B 48.8
- AndroidWorld (mobile use): **81.9%** — vs. Qwen3.6-27B 70.3, Qwen3.7-Plus 81.0, Opus 4.6 Max 62.0
- RecreationBench: **47.1%** — vs. Qwen3.6-27B 29.8
- ClawEval-MM (multimodal tool use): Pass@3 **57.4**, average **56.9**
- CoWorkBench (long-horizon office work): **70.7%** — vs. Qwen3.6-27B 61.0, Opus 4.6 Max 68.2
- JobBench (professional job tasks): **33.4%** — vs. Qwen3.6-27B 21.8
- Agents' Last Exam: Pass@1 **20.4**, score **42.9** — vs. Qwen3.6-27B 10.6 / 27.3
- SWE-MM (multimodal software engineering): **38.6%** — vs. Qwen3.6-27B 25.7
- **Conflict noted:** ARMES lists Terminal-Bench 2.1 at **79.8%** and OSWorld-Verified at **79.5%** for this checkpoint in its summary block, while its own body text and the official model card give **73.0 / 84.3**. The card values are used here.
- **Artificial Analysis Intelligence Index: 52** at `max` reasoning effort (secondary reporting via ARMES, 2026-10). The prior pass recorded "no AA page for this 27B checkpoint"; treat this single unconfirmed index value as provisional.

Reasoning / knowledge:

- GPQA Diamond: **89.2%** — vs. Qwen3.6-27B 87.8, Qwen3.7-Plus 90.3, Opus 4.6 Max 91.3, Muse Glimmer-30B 83.5
- IFBench (instruction following): **79.5%** — vs. Qwen3.6-27B 69.1, Qwen3.7-Plus 79.1
- HLE (judged by GPT-4o): **30.8%** — vs. Qwen3.6-27B 24.0, Qwen3.7-Plus 34.7, Opus 4.6 Max 40.0. **The model's clearest reasoning weakness**, and it trails even the previous closed Qwen generation here.

Multimodal:

- MathVision: **90.0%** without CI, **94.6%** with CI
- BabyVision: **65.7%** without CI, **85.6%** with CI — vs. Qwen3.6-27B 28.9 without
- CharXiv (RQ): **83.7%** without CI, **90.2%** with CI
- OmniDocBench 1.5: **91.1%**
- RealWorldQA: **85.9%**
- ERQA (embodied): **65.5%**
- Vision2Web (visual web development): **62.9%**
- MMUU-Pro: **~81.7** (secondary reporting, not on the model card)
- Video: native hour-scale video understanding. Qwen notes `video_preprocessor_config.json` ships with a conservative `size` setting and recommends raising `longest_edge` to 469,762,048 (224K video tokens) for higher frame-rate sampling — i.e. **video capability is gated behind a manual config change**.

Long context:

- Native 262,144; 1M via static YaRN. Serving guides give KV-cache headroom of roughly 377K–920K tokens at 262K context depending on precision and tensor-parallel degree. **The only published long-input datapoint is weak — ExtractBench long 38.45%** (vs. 94.68 short). No independent retrieval-at-length score exists.

Sources consulted: [Qwen/Qwen3.8-27B Hugging Face model card](https://huggingface.co/Qwen/Qwen3.8-27B), [AlibabaCloud-Official/Qwen3.8-27B GitHub](https://github.com/AlibabaCloud-Official/Qwen3.8-27B), [official Qwen3.8 repository](https://github.com/QwenLM/Qwen3.8), [vLLM recipes — Qwen3.8-27B](https://recipes.vllm.ai/Qwen/Qwen3.8-27B), [Qubrid AI — Qwen3.8-27B official and independent results (2026-08-31)](https://www.qubrid.com/blog/qwen38-27b-benchmarks-official-and-independent-results), [neoteric.no — Qwen 3.8 27B hands-on (2026-08-17)](https://www.neoteric.no/blog/qwen-3-8-27b-73-on-terminal-bench-2-1-and-still-a-24-gb-model), [ARMES Docs — Qwen3.8-27b specs](https://armes.ai/docs/models/alibaba/qwen3.8-27b), [BestLLMfor — Qwen 3.8 27B catalog](https://bestllmfor.com/catalog/qwen-3-8-27b/), and [OpenLM — Qwen 3.8 comparison tables](https://openlm.ai/qwen3.8/), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 88/100.** Raised from 76 — the largest correction in this report alongside Coding. The prior pass recorded "no Terminal-Bench or MCP value found" because the model card's agentic tables had not been read. OSWorld-Verified **84.3%** (beating Opus 4.6 Max's 72.7%), WebArena-Verified **64.8%**, AndroidWorld **81.9%**, Terminal-Bench 2.1 **73.0%**, CoWorkBench **70.7%**, ClawEval-MM **56.9%**, Agents' Last Exam score **42.9** — all from a 27B dense model running on one consumer GPU. Deducted for JobBench **33.4%**, Agents' Last Exam Pass@1 only **20.4%**, and the absence of any independently replicated agentic result.
- **Reasoning: 84/100.** Raised from 83. GPQA Diamond **89.2%** and IFBench **79.5%** hold, and a reported Artificial Analysis Index of **52** at max effort (single unconfirmed source) would place it between GPT-5.6-class frontier APIs and much larger open MoEs. Held nearly flat because **HLE at 30.8%** is the model's weak point — it trails Qwen3.6-27B's sibling Qwen3.7-Plus (34.7%) and Opus 4.6 Max (40.0%) — and JobBench sits at 33.4%. Strong contest coding and instruction following do not equal frontier-exam reasoning.
- **Context window: 91/100.** Raised from 90. 262,144 native tokens extensible to 1,000,000 is confirmed with a concrete YaRN configuration, and the hybrid Gated DeltaNet/Gated Attention layout (48 of 64 layers linear) makes long context materially cheaper than a plain dense 27B. Still capped: official evals run at 256K, the single long-input datapoint is weak (ExtractBench long 38.45%), static YaRN is Qwen's own flagged short-input tradeoff, and no independent retrieval-at-length measurement exists.
- **Multimodal: 93/100.** Raised from 90. Native image **and hour-scale video** input is confirmed. MathVision **94.6%** (with code interpreter), BabyVision **85.6%**, CharXiv **90.2%**, OmniDocBench 1.5 **91.1%**, RealWorldQA **85.9%** — a full research-grade vision suite, up sharply from Qwen3.6-27B (BabyVision 28.9 → 85.6 is the headline jump). Deducted for ERQA **65.5%** and because the hour-scale video path needs a manual `longest_edge` config change to actually engage.
- **Coding: 88/100.** Raised from 78. **LiveCodeBench v6 90.3%** is the strongest published contest-coding result in the 27B dense class and beats Qwen3.7-Plus (89.6) and Opus 4.6 Max (88.8). SWE-bench Pro **61.7%** beats the closed Qwen3.7-Plus (57.6) at 27B, Terminal-Bench 2.1 **73.0%**, QwenSWEBench **79.0%**, DeepSWE **42.2%** (3× the previous generation). Deducted for SWE-bench Verified being unpublished, NL2Repo **42.3%** trailing Opus 4.6 Max's 47.6%, and SWE-MM (multimodal coding) at only **38.6%**.
- **Cost efficiency: 92/100.** Raised from 88. **Apache 2.0 is now confirmed**, with no revenue or MaaS clause of any kind — unlike Qwen3.8-Max's custom licence. At 27B dense it runs 4-bit in 24 GB, with an official FP8 build and mature GGUF/MLX community quantizations, and the hybrid attention keeps long-context serving cheap. Residual deductions: no first-party token price for the checkpoint, ~54 GB at fp16 for anyone wanting full precision, and the 1M extension is unsupported on 24 GB without RAM offload.
- **Overall Score: 88.8/100.** (88 + 84 + 91 + 93 + 88) / 5 = 444 / 5 = 88.8, up from 83.4. The prior pass materially under-scored this model because the model card's agentic, coding, and vision tables were not mined. **Best fit:** single-GPU computer-use and GUI agents, local multimodal coding copilots, and office/knowledge automation where Apache 2.0 and 24 GB VRAM matter more than frontier-exam scores. The honest caveats are HLE 30.8%, JobBench 33.4%, and that essentially every published number is vendor-reported.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of the official Qwen3.8-27B Hugging Face model card and AlibabaCloud-Official repository, vLLM serving recipes, and independent trackers (Qubrid, BenchLM echoes, neoteric, ARMES, BestLLMfor, OpenLM); scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the reported Artificial Analysis Intelligence Index of 52 rests on a single secondary source and is flagged as provisional; the ARMES 79.8 / 79.5 Terminal-Bench and OSWorld figures conflict with the model card's 73.0 / 84.3 and the card values were used.
- Future sources: add a new file next to this one, e.g. `Qwen_3_8_Recheck.md`, using the same headings.