# Nemotron 3.5 Bolt E4B — findings by MiMo 2.6 Flash

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B — full-precision BF16 release; the `Nemotron-3.5-Bolt-E4B-4GB` GGUF (Q4_K_M) is the same weights quantized for ~4 GB deployments, not a separate model. Distinct from `nemotron-3.5-bolt-74b-a9b` (74B/9B MoE sibling) and from Nemotron 3.5 Lightning.
- **Short description:** NVIDIA's open small language model (8B total / 4B effective) post-trained from Gemma-4-E4B-it for fast local conversational agents — voice/device assistants, in-game characters, embedded/robotics interfaces on GeForce RTX, Jetson, RTX/DGX Spark. Optimization target is speed and intelligence per GB, not frontier benchmark leadership.
- **Provider / access:** open weights, self-hosted — Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16` (chat-completions via vLLM OpenAI-compatible server, `--tool-call-parser gemma4`, `--reasoning-parser gemma4`), GGUF `-4GB` on HF/Unsloth/llama.cpp, Ollama `nemotron-3.5-bolt`, LM Studio, Build.NVIDIA.com NIM (`build.nvidia.com/nvidia/nemotron-3.5-bolt-e4b`). No hosted per-token API route verified.
- **Release / knowledge:** 2026-10-23 (GA — HF model card "GA (10/23/2026)", NVIDIA research blog "Published: October 23, 2026", Build.NVIDIA 10/23/2026); post-training data cutoff May 2026 (training corpus 2013–Dec 2025).
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-DFlash`, Ollama `nemotron-3.5-bolt`; **no Free ID exists on OpenCode Zen** (checked `https://opencode.ai/zen/v1/models`, 2026-10-30 — only `nemotron-3.5-super-vl-free` and `nemotron-3.5-lightning-free` are listed) and no OpenRouter id found.
- **Context window:** **65,536 total (64K in / 64K out)** — verified first-party three ways: HF card Model Summary "Input: up to 64K tokens; output: up to 64K tokens", `config.json` `text_config.max_position_embeddings: 65536`, NVIDIA blog feature bullet "64k context"; official vLLM snippets cap `--max-model-len 65536`. **Conflict:** Artificial Analysis and BenchLeader both list 131k (their figure appears to come from the Gemma-4 vision tower's `vision_config.max_position_embeddings: 131072`); no long-context retrieval is published anywhere above 64K, so the 64K first-party figure is used for scoring.
- **Modalities:** text in / text out. Reasoning yes (chat-template `enable_thinking` plus runtime thinking-budget control); tool calls yes; conversational mode toggle; structured/JSON outputs (RL-trained, StructEval-T 80.40). **Conflict:** the Gemma-4 base ships vision and audio towers (`Gemma4ForConditionalGeneration`, `image_token_id`/`audio_token_id`, HF tag `image-text-to-text`) and Artificial Analysis states "supports text and image input", but NVIDIA's card says "Inputs / Outputs: Text / text" and the official vLLM command sets `--limit-mm-per-prompt '{"image":0,"video":0,"audio":0}'` — no image/audio serving path, no vision benchmark; the blog's robot demo gets vision from a separate model (Cosmos 3 Edge).
- **Pricing (as of 2026-10-30):** no per-token price published by anyone — Artificial Analysis: "No publicly available API"; BenchLeader: blended price "–". Weights are free under OpenMDW-1.1 (commercial use allowed), base Gemma-4 under Apache-2.0. Cost is hardware only: NVIDIA measures 3.1–4.9 GB VRAM at Q4_K_M (RTX 5070 3.5 GB / RTX Spark 3.1 GB / Jetson Orin Nano 4.2 GB at 3K ISL), 133.4 TPS and 548 ms TTFT on an RTX 5070.
- **Architecture:** 8B total parameters, 4B effective (NVIDIA card); 42-layer text backbone, vocab 262,144, sliding+full attention pattern. **Conflict:** Artificial Analysis calls it an MoE with 4B active, while the released `config.json` shows `num_experts: null` / `enable_moe_block: false`; NVIDIA's own wording "8B (4B effective)" is used as-is. Post-training: GRPO/RLVR + RLHF in NeMo RL / NeMo Gym on Gemma-4-E4B-it (2:1 non-reasoning to reasoning samples), then Q4_K_M imatrix quantization + DFlash drafter.

### Raw benchmarks found

Agent / tool use:

- BFCL-v3 avg accuracy: **68.51%** <(NVIDIA card/blog, BF16; peers in the same harness: Qwen3.5-4B 70.95, Gemma4-E4B-it 66.39, Nemotron-3-Nano-4B 61.10)>
- Tau2-Bench core avg accuracy: **55.10%** <(NVIDIA card; Qwen3.5-4B 75.06 in the same run — the clearest gap vs a size-class peer; no independent τ² run published yet)>
- ToolSandbox avg accuracy: **68.77%** <(NVIDIA card; Qwen3.5-4B 69.54)>
- When2Call Multi-Turn overall accuracy: **63.36%** <(NVIDIA card; Qwen3.5-4B 37.85, Gemma4-E4B-it 62.90)>
- RelyToolBench native/real pass: **63.16%** <(NVIDIA card; anti-hallucination tool grounding)>
- AgentIF instruction success: **25.81%** <(NVIDIA card — the weakest tool/agentic number, capped by design of complex agentic instructions)>
- IHEval conflict accuracy: **84.79%**; IFBench loose accuracy: **63.79%** <(NVIDIA card)> — IFBench independently measured at **61.1%** <(Artificial Analysis; BenchLeader rank #123, "thinking" config — the only independent number on this model as of 2026-10-30)>
- Terminal-Bench 2.1 / 4.0, Tau3-Banking, GDPval-AA, Claw-Eval, MCP-Atlas / SWE Atlas: **no verified public score found** (2026-10-30 exact-phrase search returned zero; BenchLeader reports "1 independent result so far", index needs five)

Reasoning / knowledge:

- EQ-Bench v3 rubric: **39.40** <(NVIDIA card; Gemma4-E4B-it 41.17 — below the base model it post-trains)>
- MultiChallenge overall: **53.10** <(NVIDIA card; Qwen3.5-4B 51.76, Gemma4-E4B-it 42.08)>
- RoleBench / RoleMRC: **67.05 / 80.63** <(NVIDIA card, persona/role adherence)>
- Brevity Benchmark: **82.52**; StructEval-T: **80.40**; InverseIFEval: **46.84**; SysBench: **67.88** <(NVIDIA card)>
- GaRAGe / RAGTruth: **42.61 / 77.59** <(NVIDIA card, grounded QA / hallucination-avoidance)>
- GPQA Diamond, HLE, LCR/MMLCR, CritPt, Artificial Analysis Intelligence Index, BenchLM overall: **no verified public score found** — AA cannot compute an index (no publicly available API), BenchLM shows 21 rows but "no public overall score" (unranked, 2026-10-29)
- Vendor aggregate claims (unverified by third parties): ~40% higher average quality than Nemotron 3 Nano 4B, ~10% above other size-class peers, up to ~80% fewer output tokens

Coding:

- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, Terminal-Bench: **no verified public score found** — NVIDIA's five benchmark groups (conversation, tool use, instruction & control, context robustness, state/action grounding) contain no coding benchmark, and an exact-phrase search for SWE/LiveCodeBench/Terminal-Bench + this model returned nothing (2026-10-30)
- Closest proxy (**provisional, not a code score**): SysBench 67.88% (long-prompt rule maintenance) and the card's stated private RL sets (competitive coding RL, OpenHands SWE, single-step SWE patch generation) — coding was trained but never publicly measured

Long context:

- RULER (64K) overall accuracy: **86.99%** <(NVIDIA's own harness, NeMo Gym; Qwen3.5-4B 95.15, Gemma4-E4B-it 86.55 — retrieval at the full window is solid but trails peers)>
- LongMemEval: **72.10%** <(NVIDIA card; strongest long-context number, well above Qwen3.5-4B 66.85)>
- LongBench v2 (48K): **50.50%** <(NVIDIA card; Qwen3.5-4B 59.93)>
- No retrieval-at-length published above 64K (window itself is 64K)

### Normalized scores (1–100)

- **Tool use: 65/100.** Six measured tool benchmarks cluster in the 55–69 band (BFCL-v3 68.51, ToolSandbox 68.77, When2Call-MT 63.36, RelyToolBench 63.16, τ² 55.10) with standout instruction-hierarchy handling (IHEval 84.79) — solidly in the methodology's upper-mid tier. Capped by AgentIF 25.81, by τ² trailing Qwen3.5-4B 55.10 vs 75.06, and by the complete absence of Terminal-Bench / GDPval / Claw-Eval numbers.
- **Reasoning: 50/100.** Every headline reasoning proxy is missing (no GPQA, HLE, LCR, CritPt, AA Index or BenchLM overall — AA has no API to evaluate), so no frontier anchor exists; what is measured reads mid-pack or worse: EQ-Bench v3 39.40 below its own base model, MultiChallenge 53.10, InverseIFEval 46.84, GaRAGe 42.61. The score reflects a deliberately small edge model NVIDIA positions for conversation, not reasoning depth.
- **Context window: 35/100.** Verified 64K total (HF card + `config.json` 65536 + NVIDIA "64k context" bullet) sits in the methodology's "<100K scales down to 10–49" band; it earns the upper part of that band because retrieval at the full window is genuinely good (RULER 86.99, LongMemEval 72.10). The 131k figure published by Artificial Analysis/BenchLeader is unverified against any retrieval result and is rejected in favour of first-party config.
- **Multimodal: 20/100.** Official product surface is text in / text out only (card "Text / text"; official serving config zeroes image/video/audio prompts), i.e. the methodology's 10–20 text-only tier. Scored at the top of that tier only because the Gemma-4 weights retain vision/audio towers and Artificial Analysis reports image input — but with no documented serving path and zero vision benchmark, nothing supports 60+.
- **Coding: 40/100.** No verified public coding benchmark exists for this model (SWE-bench, LiveCodeBench, SciCode, Vibe, Terminal-Bench all absent) — the value is a provisional class-based estimate: an edge conversational model whose public suite stops at instruction/grounding benchmarks, whose only adjacent numbers are SysBench 67.88 (not code), and whose size class (Gemma-4-E4B / Qwen3.5-4B) sits far below SWE-capable mid-size models. Any future SWE-bench or LiveCodeBench run would overwrite this.
- **Cost efficiency: 90/100.** No per-token price exists anywhere (no API to price), and the weights are free under OpenMDW-1.1 with measured local footprint of 3.1–4.9 GB VRAM — effectively $0 to run on hardware a developer already owns. Held below 100 only because no verified $0 hosted route (e.g. a Zen Free tier) is published, so the free-tier credit the methodology scores at 100 cannot be claimed.
- **Overall Score: 42/100.** (65 + 50 + 35 + 20 + 40) / 5 = 42.0 — a fast, cheap, local multi-turn tool-caller for voice/device assistants and NPC-style characters; not a planner, not a reasoner, not a coder, and deliberately so. Escalate to Nemotron 3.5 Lightning or a mid-size model for long-context and coding work.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-30
- Method: public internet research across DuckDuckGo Lite (5 queries), Hugging Face model card + `config.json`, NVIDIA research blog/technical report, Artificial Analysis, BenchLM, BenchLeader, OpenCode Zen model list and OpenRouter catalogue (2026-10-30); scores are normalized 1–100 interpretations, not official vendor scores. First-party NVIDIA figures win every conflict (64K vs 131k context; text-only vs image input); no number invented, missing benchmarks marked "no verified public score found".
- Reference URLs:
  - [NVIDIA Nemotron 3.5 Bolt E4B 4GB launch blog (2026-10-23, benchmark tables)](https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB/)
  - [NVIDIA HF model card — NVIDIA-Nemotron-3.5-Bolt-E4B-BF16 (21-benchmark table, specs)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16)
  - [Nemotron 3.5 Bolt E4B 4GB Technical Report (PDF)](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-Technical-Report.pdf)
  - [Artificial Analysis — Nemotron 3.5 Bolt E4B 4GB (IFBench 61.1%, specs, "no publicly available API")](https://artificialanalysis.ai/models/nemotron-3-5-bolt-e4b-4gb)
  - [BenchLM — Nemotron 3.5 Bolt E4B (21 rows, no public overall score, 2026-10-29)](https://benchlm.ai/models/nemotron-3-5-bolt-e4b)
  - [BenchLeader — Nemotron 3.5 Bolt E4B 4GB (1 independent result, released 23 Oct 2026)](https://www.benchleader.com/models/nemotron-3-5-bolt-e4b-4gb)
  - [Build.NVIDIA.com NIM model card](https://build.nvidia.com/nvidia/nemotron-3.5-bolt-e4b/modelcard)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. This file supersedes the `.md.excluded` twin written 2026-10-16 (pre-release, zero benchmarks); twin retirement awaits per-file user confirmation.
