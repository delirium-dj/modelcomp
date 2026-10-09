# Ling 3.0 Tiny — findings by GLM 5.3

- Source: inclusionAI / Ant Group (`inclusionAI/Ling-3.0-tiny`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-tiny
- **Short description:** The smallest member of Ant Group inclusionAI's Ling 3.0 family — a 7.9B-total / ~1.3B-active hybrid reasoning MoE built explicitly for local and edge agent loops, delivering small-class-leading reasoning (AA Intelligence Index 25 vs class median 8) on consumer hardware.
- **Provider / access:** Hugging Face open weights MIT (`inclusionAI/Ling-3.0-tiny`, plus `-fp8` and INT4 checkpoints); OpenRouter free-tier listing at launch (promo through 2026-08-14); vLLM (`vllm-ling-v3` branch), SGLang cookbook + pre-built image, MLX (Apple Silicon); Ollama support in-flight at last report.
- **Release / knowledge:** 2026-08-06 (Hugging Face, MIT); knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-tiny` (Hugging Face); no OpenCode Zen ID found.
- **Context window:** 128K native (131,072 max_position_embeddings), served at 262,144 via YaRN (rope_theta 6,000,000) — verified from the model card via the research-vault write-up.
- **Modalities:** text in / text out; native hybrid thinking mode (reasoning on by default); `ling3` tool-call parser for agent loops. Text-only.
- **Pricing (as of 2026-10-09):** $0 at launch on OpenRouter (limited promo through 2026-08-14); MIT open weights free for self-hosting — ~16 GB fp16 / ~8 GB FP8 VRAM, verified deployments on NVIDIA DGX Spark (100–105 tok/s FP8) and Apple M4 Pro MacBook (86–90 tok/s).
- **Architecture:** 7.9B total / 1.3B active sparse MoE — 24 layers, 3:1 alternating Kimi Delta Attention (linear) + gated MLA stack, 128 routed experts with 8 + 1 shared active per token; custom `BailingMoeV3ForCausalLM` (trust_remote_code required); BF16/FP8/INT4 checkpoints.

### Raw benchmarks found

Agent / tool use:

- AA Agentic Index: **16** (Artificial Analysis, independent composite — includes τ³-Banking and Terminal-Bench 2.1 components)
- BFCL / τ-Bench / ToolACE / GAIA: no verified public score found (not published in extractable form)
- Terminal-Bench 2.1: evaluated under AA protocol (Terminus 2 harness, 256K ctx) — number only in the image-only chart on the model card

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.1.1: **25** (independent composite; **#6 of 56 in the small/open class, class median 8**)
- GPQA Diamond / AIME 2025-2026 / HLE: present only in the model card's image-only benchmark chart — no transcribed values published; no `.eval_results/` YAML shipped for tiny (unlike flash)
- MMLU / MMLU-Pro / MATH: no verified public score found

Coding:

- HumanEval / HumanEval+ / MBPP / LiveCodeBench / Aider polyglot / SWE-bench Verified / SWE-bench Multilingual: no verified public score found (all not published — cells left empty rather than invented)

Long context:

- No MRCR/RULER retrieval benchmark found (128K native / 262K served window verified)

Efficiency (verified):

- ~168 tok/s server-class throughput (research-vault measurement); DGX Spark 100–105 tok/s FP8; M4 Pro MacBook 86–90 tok/s; ~8.34 GiB peak memory at 8K context

### Normalized scores (1–100)

- **Tool use: 35/100.** Genuinely built for agent loops (native thinking + `ling3` tool-call parser, SGLang/vLLM deployment recipes), but the only measured number — AA Agentic Index 16 — is low in absolute terms, and no BFCL/τ-Bench/GAIA row exists anywhere.
- **Reasoning: 55/100.** The AA Intelligence Index of 25 lands the methodology's mid band (20–35 → 55–65) and is outstanding for a 1.3B-active model (#6/56 in class vs median 8); capped because every per-benchmark reasoning number exists only in an image-only chart nobody has transcribed.
- **Context window: 70/100.** Verified 128K native window extended to 262,144 via YaRN serving — scored on the served 262K (200K–500K tier floor), with no retrieval-rate benchmark to justify more.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 30/100.** Zero published coding benchmarks — no HumanEval, LiveCodeBench, or SWE-bench number in extractable form; the family's coding profile (flash's SWE-bench Pro 56.6) belongs to a different, much larger checkpoint and is not credited here.
- **Cost efficiency: 97/100.** MIT open weights that run on a single laptop or edge box (FP8 ≈ 8 GB), a $0 OpenRouter launch promo, and 1.3B-active inference — effectively free at every access path.
- **Overall Score: 41/100.** Half-up mean of (35 + 55 + 70 + 15 + 30) = 41.0 → 41. Best fit: the strongest reasoner you can run on a MacBook for local agent experiments — class-leading intelligence per active parameter, but unproven (unpublished) on coding and absolute agentic suites; verify per-benchmark claims yourself before production use.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/GLM-5.3)** — 2026-10-09
- Method: public internet research (Hugging Face model-card facts via the kinonn research-vault write-up, Artificial Analysis composite indices, vLLM recipes, llm-releases); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
