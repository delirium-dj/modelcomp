# Qwen 3.5 397B — findings by MiniMax M3

- Source: Alibaba / `Qwen/Qwen3.5-397B-A17B` (Hugging Face, Apache 2.0 open weights); hosted on DashScope, DeepInfra, Together, Fireworks, OpenCode Zen (`opencode/qwen-3.5-397b`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Naming note.** "Qwen 3.5 397B" in our roster is the **397B total / 17B active MoE flagship** of the Qwen 3.5 generation, weights `Qwen/Qwen3.5-397B-A17B` on Hugging Face under Apache 2.0. It is the largest open-weight Qwen 3.5 (the "A17B" suffix is the *active* parameter count per token — inference cost scales with active, not total, which is why a 397B MoE is feasible to serve at frontier-class price points). It is **not** the same as the later Qwen 3.7 Max (closed-weight, May 2026) or Qwen 3.8 Max (open-weight 2.4T-A95B, August 2026); each is a separate folder in our queue. Inside the 3.5 family the smaller 3.6-27B *beats* the 397B on coding suites per Qwen's own table — context for why a frontier-class MoE can sit below a single-GPU dense on agentic coding.

## Model card

- **Name:** Qwen 3.5 397B (Apache 2.0)
- **Short description:** Alibaba's largest open-weight Qwen 3.5 — 397B total / 17B active MoE with the hybrid Gated-DeltaNet-plus-FFN + Gated-Attention backbone, 262K native context (extensible to ~1M via YaRN), 201 languages, native vision-language via early fusion. The cost-per-quality open flagship; sits just below the closed Qwen 3.6/3.7/3.8 Max on agentic coding while remaining the high-water mark for self-hostable open weights.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5-397b` (managed, $0.60/$3.60 per 1M, per AA / `meta.json`); self-host from `Qwen/Qwen3.5-397B-A17B` on Hugging Face (Apache 2.0). Hosted on DeepInfra $0.54/$3.40, Together ~$1.20 blended, Fireworks, DashScope Anthropic-API-compat.
- **Release / knowledge:** Weights published **2026-03-09** on Hugging Face under Apache 2.0 (HF date stamp; the family was released in three waves 2026-02-16 → 2026-03-02, with the 397B-A17B dropping in the final wave). Generation announced February 2026. Reliable knowledge cutoff ≈ late 2025 (Qwen does not publish per-cutoff for open weights).
- **IDs:** `opencode/qwen-3.5-397b` (managed). Self-host: `Qwen/Qwen3.5-397B-A17B` (Hugging Face). ModelScope mirror: `Qwen/Qwen3.5-397B-A17B`. DashScope Anthropic-compat name: `qwen3.5-397b-a17b`. The canonical project alias is the OpenCode Zen route (`RULES.md` Qwen 3.5 397B identity, 2026-10-08).
- **Context window:** **262,144 tokens** native (256K per the Qwen 3.5 family spec; the project uses 262,144 as the practical native window). Extensible to **~1,010,000** via YaRN factor 4.0. ~1M on hosted routes.
- **Modalities:** Text, image, video in; text out. **Native vision-language** via early fusion of multimodal tokens into a single backbone (no separate VL tree, unlike Qwen 3). Tool calls / function calling supported (4B-tier and up; the 397B-A17B is the strongest at multi-turn agentic tool sequences). Instruct and Thinking variants ship — the Thinking variant emits chain-of-thought traces and scores higher on reasoning benchmarks at the cost of longer generation latency.
- **Pricing (as of 2026-10-17):** `meta.json` `AA $0.60/$3.60 per 1M` for the hosted route. DeepInfra $0.54/$3.40 (cheapest of the major hosts). Together ~$1.20 blended. DashScope is tiered by request size (small requests under 32K get the lowest rate). Apache 2.0 self-host = $0 marginal cost (with hardware: 4-8× H100 or 2-4× H200 for FP8, 397B Q4 ≈ 218 GB on disk).
- **Architecture:** **397B total / 17B active sparse MoE**, ~75 % Gated DeltaNet linear-attention layers and ~25 % full softmax attention with GQA + RoPE. The hybrid linear-attention backbone is what gives a 256K native context with sane KV cache cost. Multi-Token Prediction (MTP) trained. Hybrid linear-attention is the source of the **8-19× faster decoding than prior Qwen3-Max** and **~60 % lower cost** claim (vendor-reported).

### Raw benchmarks found

> Vendor-reported numbers from Qwen's launch materials and independent reruns where published. The Artificial Analysis Intelligence Index v4.3.2 (Oct 2026) figures cited here are the *current* rescaled index; do not compare against pre-Oct-2026 v4.0/v4.1 numbers.

Agent / tool use:

- **Tau2-Bench (agents): 86.7** (Qwen launch, vs DeepSeek V4-Pro ~80, vs Llama 4 Maverick — , vs Gemma 4 31B ~70). Second only to Claude Opus 4.6 (91.6) on the same vendor run.
- **SWE-bench Pro: 50.9** (Qwen launch, vs the next-tier Qwen 3.6-27B 53.5 and Qwen3.8-27B 61.7). The 397B-A17B *loses* the agentic-coding head-to-head against the smaller 3.6-27B and 3.8-27B; it is not the right pick for long-horizon SWE.
- **SWE-bench Verified: 76.2** (Qwen launch, vs Qwen 3.6-27B 77.2, vs DeepSeek V4-Pro 83.7, vs Llama 4 Maverick ~55). The 3.6-27B beats the 397B on this head-to-head — the 397B is a reasoning + multilingual flagship, not a code-first model.
- **MMLU-Pro: 88.0** (Qwen launch, vs DeepSeek V4-Pro 92.8, vs Llama 4 Maverick 80.5, vs Gemma 4 31B 84.2).

Reasoning / knowledge:

- **GPQA Diamond: 88.4** (Qwen launch, vs DeepSeek V4-Pro 87.9, vs Llama 4 Maverick 78.2, vs Gemma 4 31B 83.6).
- **AIME 2026: 91.3** (Qwen launch, vs DeepSeek V4-Pro 99.4 — DeepSeek still leads math, vs Llama 4 Maverick 72.0, vs Gemma 4 31B 89.2).
- **Artificial Analysis Intelligence Index v4.3.2 (Oct 2026, Reasoning tier): 18.42** (independent). Note the inversion: the dense Qwen3.5-27B (22.90) outscores the 397B-A17B flagship (18.42) on the same index — on the v4.3.2 hard ten-eval basket, the single-GPU tier is the strongest open checkpoint Qwen 3.5 shipped.

Coding:

- **LiveCodeBench v6: 83.6** (Qwen launch, vs DeepSeek V4-Pro ~85, vs Llama 4 Maverick 62.4, vs Gemma 4 31B 71.0).
- **SWE-bench Verified: 76.2** (above; the launch run; independent rerun not yet published at the v4.3.2 timestamp).

Long context:

- 262,144 native / ~1M via YaRN. **Hybrid linear-attention has rough edges in adversarial needle-in-a-haystack tests at 128K+** — a known limitation of the 75/25 DeltaNet/softmax mix (Qwen's own documentation and codersera.com Qwen 3.5 guide). Production RAG with exact verbatim retrieval at very long contexts should benchmark on real data first.

Multimodal:

- **MMMU: 85.0** (Qwen launch, vs Llama 4 Maverick 73.4, vs Gemma 4 31B 76.8). Native vision-language via early fusion; the same backbone handles text + image + (via Omni-Plus sibling) audio + video. DeepSeek V4-Pro has no published MMMU here.

### Normalized scores (1–100)

> Per `RULES.md` (v4): **Overall = half-up mean of the five quality dims** `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency scored independently and excluded. All numbers are normalized 1–100 interpretations of the vendor-published + independent-rerun evidence above.

- **Tool use: 80/100.** Tau2-Bench 86.7 (second only to Claude Opus 4.6's 91.6 on the same vendor run) is the strongest single signal. The 397B-A17B is the strongest at multi-turn agentic tool sequences within the 3.5 family. SWE-bench Pro 50.9 / SWE-bench Verified 76.2 are *not* best-in-class for Qwen — the 3.6-27B and 3.8-27B beat it on agentic coding. Anthropic Messages protocol support (DashScope) makes it a drop-in for Claude Code / Cline with no shim layer.
- **Reasoning: 83/100.** GPQA Diamond 88.4 / AIME 2026 91.3 / MMLU-Pro 88.0 — all near the DeepSeek V4-Pro cluster and clearly above Llama 4 Maverick / Gemma 4 31B. AA Intelligence Index v4.3.2 (Oct 2026) 18.42 (Reasoning) is the independent cross-check; that number sits below the 3.5-27B (22.90) on the same index, which is the inversion that surprised analysts. The Thinking variant emits CoT traces and scores higher; default is Instruct.
- **Context window: 85/100.** 262,144 native is the Qwen 3.5 family spec; ~1M via YaRN is on paper but the hybrid linear-attention has known adversarial needle-in-a-haystack degradation past 128K. The 397B is a 256K-class model with a 1M extensibility caveat; treat long-context retrieval claims with care. No public MRCR/RULER at 1M.
- **Multimodal: 83/100.** Native vision-language via early fusion — text + image + video in, text out. MMMU 85.0 (Qwen launch) is best-in-class for an open-weight model; the 3.5 family unifies text and VL into a single backbone (Qwen 3 had separate VL models). Audio is the Omni-Plus sibling, not the 397B itself.
- **Coding: 81/100.** LiveCodeBench v6 83.6 / SWE-bench Verified 76.2 / SWE-bench Pro 50.9 — solid for an MoE, but the 3.6-27B beats it on every agentic coding row per Qwen's own table (SWE-bench Verified 77.2, Terminal-Bench 2.0 59.3 vs 52.5, SWE-bench Pro 53.5 vs 50.9). For raw coding, this is a near-frontier but not best-in-Qwen; the 27B / 3.8-27B are the better picks on that single dimension.
- **Cost efficiency: 90/100.** Apache 2.0 self-host = $0 marginal cost (with hardware). DeepInfra $0.54/$3.40 per 1M is roughly 1/10 to 1/15 of frontier closed models for comparable agentic and reasoning quality. Together ~$1.20 blended. AA $0.60/$3.60 for the project route. Per `meta.json` this is the most cost-efficient open-weights frontier-near tier in the queue.
- **Overall Score: 82.4/100.** Half-up mean of the 5 non-cost quality dims: (80 + 83 + 85 + 83 + 81) / 5 = 412 / 5 = 82.4 → **82** (rounded half-up). Best fit: a self-hostable reasoning + multilingual + agentic flagship that runs on 4-8× H100 / 2-4× H200, drop-in for Claude Code via the DashScope Anthropic-compat endpoint. For pure SWE, pick the 3.6-27B or 3.8-27B; for raw math, DeepSeek V4-Pro still leads. The 397B-A17B is the **cost-per-quality open flagship** for teams that can stand up the hardware.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
- Method: independent MiniMax M3 evaluation. Primary sources: `huggingface.co/Qwen/Qwen3.5-397B-A17B` (weights card), `modelscope.cn/models/Qwen/Qwen3.5-397B-A17B` (ModelScope mirror), `codersera.com/blog/qwen-3-5-complete-guide-2026/` (family reference, benchmark tables, pricing matrix, self-hosting hardware table, Anthropic-Messages-protocol setup, known-limitations section), `github.com/xigh/open-weight-models` (deployment size reference, 397B Q4 ≈ 218 GB). Cross-references: `morphllm.com/qwen-3-5` (397B MoE 17B active, February 2026 release, 262K context), `artificialanalysis.ai` (AA Intelligence Index v4.3.2 inversion note). All coding/agentic numbers are vendor-reported; independent reruns on the v4.3.2 index confirm the 27B-vs-397B inversion. The 397B-A17B is a top-of-line open MoE but is *not* Qwen's strongest agentic coding model — that title now goes to 3.6-27B and 3.8-27B.
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_397B_alt.md`, using the same headings; Qwen 3.7 Max and Qwen 3.8 Max are separate folders in our queue and should be researched separately.
