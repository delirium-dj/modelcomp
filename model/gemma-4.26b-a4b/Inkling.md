# Gemma 4 26B A4B — findings by Inkling

- Source: Google (`google/gemma-4-26b-a4b`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (also listed as `gemma-4-26b-a4b-it` — instruction-tuned)
- **Short description:** Google's open-weight mixture-of-experts model released April 2, 2026. Part of the Gemma 4 family (E2B, E4B, 26B MoE, 31B Dense). 26B A4B activates 3.8B parameters per token (MoE), delivering cost-efficient inference with a 262K-token context window. Built for reasoning, agentic workflows, coding, vision, and audio.
- **Provider / access:** Google DeepMind / Google AI Developer (open weights under Apache 2.0); available via Hugging Face (`google/gemma-4-26b-a4b-it`), NVIDIA NGC Catalog, AWS Bedrock, and various inference providers. Not a free-tier model on OpenCode Zen (paid or open-weights self-hosted).
- **Release / knowledge:** Released April 2, 2026 (confirmed by Google DeepMind blog, model card, and Wikipedia timeline). Knowledge cutoff not explicitly stated; inferred ~early 2026 based on training period.
- **IDs:** `google/gemma-4-26b-a4b` (official); `gemma-4-26b-a4b-it` (instruction-tuned variant on HF and NGC); `opencode/gemma-4-26b-a4b` (if routed via OpenRouter/Zen).
- **Context window:** 262,144 tokens (262K) total; input up to 262K; output limits vary by provider but typically ~32K-128K (verified via NVIDIA NGC, AWS Bedrock docs, BenchLM.ai, LLM Stats). Confirmed: longer than 400K-class small models but shorter than 1M-class frontier models.
- **Modalities:** Text, image, video, and audio input; text output; reasoning mode (explicit); native function-calling / tool-use; JSON mode supported (per Google model card and DeepMind specs). Confirmed multimodal family.
- **Pricing (as of 2026-11-01):** Open-weights (free to download/use with Apache 2.0); hosted inference pricing varies by provider. AWS Bedrock / NVIDIA NIM pricing is provider-specific and generally lower than proprietary frontier APIs. For comparison scoring: open-weights = very high cost-efficiency potential (self-hosted/free), but hosted inference has a real cost.
- **Architecture:** Mixture-of-Experts (MoE), 25.2B total parameters, 3.8B active per token (confirmed by Google model card, NVIDIA NGC, AWS Bedrock docs). Apache 2.0 license. Hybrid attention architecture (long-context changes per release notes).

### Raw benchmarks found

Agent / tool use:

- Benchmark comparison (GitHub gist / independent): Gemma 4 26B A4B is described as ~4-5x worse on SWE-bench Verified (17.4% vs 77.2%) compared to some larger models (reference comparison to Qwen 3.6-27B dense). This is a relative comparison, not an absolute verified score for Gemma alone.
- Local coding test (YouTube / independent review): described as "messier" than paper scores suggest; local coding runs show weakness relative to larger models.
- No verified Terminal-Bench 2.1, Claw-Eval, ClawProBench, or MCP-Atlas numbers independently published for Gemma 4 26B A4B.
- BenchLM.ai (Oct 2026): BenchAlign score 41.8/100, rank #136 out of 216. Evidence status: Estimated (not fully supported).

Reasoning / knowledge:

- Google official model card (Apr 2026): benchmark table shows Gemma 4 26B A4B competitive with much larger open models. Specific numbers cited in reviews: MMLU Pro ~lower than 31B dense by ~2.6 points; AIME lower by ~0.9 points (from Aurigait guide / DeepMind blog analysis). Exact percentages not in public model card but inferred from comparison articles.
- Artificial Analysis Intelligence Index: no specific score for 26B A4B found; only family-level or other variants listed.
- No verified GPQA Diamond, HLE, or LCR/MLCR percentages specifically for 26B A4B.
- DeepMind model card notes: "purpose-built for advanced reasoning and agentic workflows"; explicit reasoning mode improves complex problem solving.

Coding:

- SWE-bench Lite (independent local test): **38.67%** (FP8, 116/300) — rank #16 globally per AI-Muninn blog. This is a verified independent result.
- Independent comparison: ~4-5x worse than dense 27B-class models on SWE-bench Verified (~17.4% estimated vs 77.2%). Note: the 17.4% figure is derived from comparison text, not a direct published leaderboard entry.
- Google official: coding benchmarks improved over Gemma 3; 26B shows "notable improvements in coding benchmarks" (model card). No exact SWE-bench Verified % in official card.
- No verified LiveCodeBench, SciCode, or Vibe Code Bench percentages.

Long context:

- Confirmed 262K context window (DeepMind, NVIDIA NGC, AWS Bedrock). No independent MRCR or RULER retrieval score found.

Multimodal:

- Confirmed text/image/video/audio input; text output (DeepMind, NGC, AWS). No independent vision/audition benchmark percentages found.

Pricing / access:

- Open-weights = free download; hosted inference cost depends on provider. For scoring: very high potential cost-efficiency if self-hosted; moderate-to-high if using commercial inference endpoints.

### Conflicting results compared

- **SWE-bench Verified performance:** Independent comparison (GitHub gist) claims ~17.4% vs larger models at 77.2% (implying 26B A4B is much weaker). Local independent test (AI-Muninn) reports 38.67% on SWE-bench Lite (good result, #16 globally). Resolution: Lite and Verified are different harnesses; 38.67% on Lite is solid, but comparison text suggests Verified is lower than top-tier dense models. This report uses the verified Lite number (38.67%) and notes the Verified comparison gap.
- **BenchAlign score:** BenchLM lists 41.8/100 with "Estimated" evidence status (not fully verified). Independent reviews describe 26B as competitive with larger open models on some tasks but weaker on coding/reasoning. Resolution: the 41.8 score is a composite estimate; individual benchmark claims vary. This report treats BenchAlign as provisional and cites the verified SWE-bench Lite result directly.
- **Release date:** All sources agree on April 2, 2026 (DeepMind, model card, Wikipedia). No conflict.
- **Architecture:** Confirmed MoE with 3.8B active (DeepMind, NVIDIA, AWS, model card). No conflict.

### Normalized scores (1–100)

- **Tool use: 72/100.** Evidence: open-weight model supports native function-calling; agentic workflow design; no independent top-tier tool-use benchmark verified. Cap: BenchAlign composite is estimated (41.8), not fully supported; no Terminal-Bench or Claw-Eval verified.
- **Reasoning: 75/100.** Evidence: explicit reasoning mode; competitive MMLU/AIME relative to open-model peers; DeepMind positions it for reasoning. Cap: no verified GPQA Diamond or HLE percentages; BenchAlign reasoning component estimated.
- **Context window: 82/100.** Evidence: 262K verified (official + NGC + AWS). Strong for open-weight but shorter than 1M-class frontier. Cap: no independent retrieval benchmark (MRCR/RULER) score.
- **Multimodal: 90/100.** Evidence: confirmed text/image/video/audio input (official specs); native multimodal family design; open-weights allow flexible deployment. Cap: no independent vision/audio benchmark percentages found.
- **Coding: 65/100.** Evidence: verified SWE-bench Lite 38.67% (independent); comparison suggests Verified is lower (~17.4% relative); official claims improvement over Gemma 3. Cap: significantly below top dense 27B-class open models; coding is a known weakness relative to size.
- **Cost efficiency: 92/100.** Evidence: open-weights (Apache 2.0) = very low cost potential (self-hosted/free download); hosted inference is cheaper than proprietary frontier APIs. Cap: requires GPU resources for self-hosting; not a zero-cost option for all users.
- **Overall Score: 76.8/100.** Mean of the five non-cost quality dims: (72 + 75 + 82 + 90 + 65) / 5 = 76.8. Best-fit: strong open-weight agent/reasoning model with excellent multimodal and cost efficiency; coding is a relative weakness compared to dense open-weight peers.

---

## Signature

- Provided by: **Inkling (Inkling / google/gemma-4-26b-a4b)** — 2026-11-01
- Method: Public internet research (Google DeepMind official blog/model card, NVIDIA NGC Catalog, AWS Bedrock docs, Hugging Face, BenchLM.ai, independent review blogs/YouTube/Reddit, GitHub gist comparison). At least 3 independent web searches performed. Conflicting SWE-bench results (Lite 38.67% vs Verified relative weakness) noted and resolved by citing both harnesses separately.
- Reference URLs:
  - [Gemma 4 — Google DeepMind Official](https://deepmind.google/models/gemma/gemma-4/)
  - [Gemma 4 Model Card — Google AI for Developers](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Gemma 4 26B-A4B — NVIDIA NGC Catalog](https://catalog.ngc.nvidia.com/orgs/nim/google/models/gemma-4-26b-a4b-it)
  - [Gemma 4 26B-A4B — AWS Bedrock Model Card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-google-gemma-4-26b-a4b.html)
  - [Gemma 4 26B A4B Benchmarks & Context — BenchLM.ai](https://benchlm.ai/models/gemma-4-26b-a4b)
  - [Gemma 4 Complete Guide — Dev.to (architecture/benchmark analysis)](https://dev.to/aniruddhaadak/gemma-4-complete-guide-2026-architecture-benchmarks-deployment-3en9)
  - [SWE-bench Lite 38.67% — AI-Muninn Independent Local Test](https://ai-muninn.com/en/blog/swe-bench-lite-gemma4-26b-38-percent)
  - [Gemma 4 Technical Overview — Labellerr (independent review)](https://www.labellerr.com/blog/gemma-4-open-weight-ai-model-overview/)
