# GLM 4.7 Flash — findings by GLM 5.3 Flash

- Source: Z.ai (`zai-org/GLM-4.7-Flash`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7-Flash
- **Short description:** Z.ai's free open-weight 30B-A3B MoE — the strongest 30B-class model on agentic boards (SWE-V 59.2 vs Qwen3-30B's 22.0, τ²-Bench 79.5, BrowseComp 42.8), optimized for multi-turn tool use with three thinking modes and 93% KV-cache compression via MLA. MIT licensed.
- **Provider / access:** Open weights on Hugging Face (`zai-org/GLM-4.7-Flash`, MIT, no gate, 62.4 GB BF16); free on Z.ai's own API (`glm-4.7-flash`, free in/out per October 2026 pricing); DeepInfra $0.06/$0.40; OpenCode Zen `opencode/glm-4.7-flash`.
- **Release / knowledge:** Released 2026-01-19 (HF repo), last update 2026-01-29. Knowledge cutoff not published on the card.
- **IDs:** `glm-4.7-flash` (Z.ai API); `zai-org/GLM-4.7-Flash` (HF); `opencode/glm-4.7-flash` (Zen).
- **Context window:** **202,752 tokens (~200K)** per the HF config and vendor spec; 128K max output (serving tables; card evals use up to 131K generation). **Meta correction:** this folder's curated meta says "1M total" — every vendor surface found (config, SAVRN index, spec pages) says ~200K; nothing documents a 1M window for this SKU.
- **Modalities:** Text in/out (en, zh). Thinking modes: interleaved / preserved / turn-level (preserved thinking required for τ²-Bench-class multi-turn agentic work); tool calling native.
- **Pricing (as of 2026-11-01):** Free on Z.ai's own API ($0 all tiers) and free MIT weights; paid FastX sibling exists; third-party hosts ~$0.06 in / $0.40 out per 1M.
- **Architecture:** MoE, 31.2B total / ~3B active, 64 experts with 4 routed per token; Multi-head Latent Attention (KV cache compressed up to ~93%); 202K RoPE context; BF16 62.4 GB (Q4_K_M ≈ 19.8 GB VRAM).

### Raw benchmarks found

(all vendor-reported, model card; comparison column values = Qwen3-30B-A3B-Thinking-2507 / GPT-OSS-20B)

Agentic / tool use:

- τ²-Bench: **79.5%** (vs 49.0 / 47.7) — retail/telecom prompt fixes applied per Claude-4.5-card practice
- BrowseComp: **42.8%** (vs 2.29 / 28.3)
- SWE-bench Verified: **59.2%** (vs 22.0 / 34.0; temp 0.7, 16K output, agentic harness) — SOTA claim for the 30B class

Reasoning / knowledge:

- AIME 2025: **91.6%** (vs 85.0 / 91.7)
- GPQA Diamond: **75.2%** (vs 73.4 / 71.5)
- HLE: **14.4%** (vs 9.8 / 10.9)

Coding (contest):

- LiveCodeBench v6: **64.0%** (vs 66.0 / 61.0 — behind Qwen3-30B here)

Long context / multimodal:

- No published long-context retrieval benchmark and no multimodal rows (text-only SKU). Terminal-Bench 2 referenced in eval parameters but no published number found.

### Normalized scores (1–100)

- **Tool use: 71/100.** τ²-Bench 79.5, BrowseComp 42.8 and SWE-V 59.2 dominate the 30B class with three thinking modes purpose-built for agent sessions — but vendor-measured with self-applied prompt fixes, and far below the flagship GLM tier.
- **Reasoning: 70/100.** AIME 91.6 / GPQA 75.2 / HLE 14.4 lead its class; the ceiling is the typical frontier-exam gap of a 3B-active MoE.
- **Context window: 64/100.** Verified 202,752-token window with MLA-compressed KV cache and 128K output; no retrieval benchmark published to verify the top end.
- **Multimodal: 10/100.** Text-only — near the floor by design (the GLM-4.6V line covers vision).
- **Coding: 66/100.** SWE-V 59.2 is a genuine class-leading real-GitHub-issue score; capped by LCB 64.0 (behind Qwen3-30B) and a single-sourced vendor table.
- **Cost efficiency: 99/100.** Free hosted lane on Z.ai's own API AND free MIT self-hosting — both lanes fully free; one point off the floor only for third-party concurrency limits.
- **Overall Score: 56/100.** Mean of the five quality dims (71+70+64+10+66)/5 = 56.2 → 56. Best fit: free agentic coding, browsing agents and tool loops at 30B-class quality — the open-weight Haiku-equivalent of its generation.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (official HF model card with benchmark table + eval parameters, Z.ai release coverage, hosting/serving tables, independent model indexes); scores are normalized 1–100 interpretations, not official vendor scores. All benchmark rows are vendor-reported. Curated-meta context discrepancy (1M vs 200K) flagged, not silently adopted.
- Reference URLs:
  - [Hugging Face — zai-org/GLM-4.7-Flash model card (benchmark table + evaluation parameters)](https://huggingface.co/zai-org/GLM-4.7-Flash)
  - [Ox Alpha — GLM-4.7-Flash spec sheet (release date, 200K context, free API status)](https://oxalpha.run/glm/glm-4.7-flash)
  - [SAVRN — GLM-4.7-Flash architecture index (31.2B, 202,752 ctx, 64 experts)](https://savrn.com/models/glm-4-7-flash)
  - [AlphaSignal — GLM-4.7-Flash analysis (MLA KV compression, DeepInfra pricing)](https://alphasignal.ai/news/z-ai-s-glm-4-7-flash-beats-qwen3-on-coding-agents-at-0-06-per-million-tokens)
  - [aiHola — GLM-4.7-Flash release review (62.5GB weights, vLLM/SGLang)](https://aihola.com/article/glm-4-7-flash-moe-release)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
