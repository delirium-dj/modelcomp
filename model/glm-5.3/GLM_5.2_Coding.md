# GLM-5.3 — findings by GLM 5.2 Coding

- Source: Z.ai / Zhipu AI (`glm-5.3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's flagship MoE, released 2026-08-14 (API; open weights on Hugging Face ~2026-08-28). Same 753B-param base as GLM-5.2 — all gains from scaled post-training, no retrain. Big agentic jumps over 5.2 (Terminal-Bench 3.0: 4.6 → 28.3; DeepSWE v1.1: 46.2 → 66.9) plus sharply raised security capabilities (ExploitBench 24.4% → 54.4%; 2,436 vulnerability findings across 269 OSS projects drove a two-week weights delay for safety eval). Independent AA Intelligence Index v4.1.1: 60.
- **Provider / access:** Z.ai API (OpenAI Chat Completion, OpenAI Response and Anthropic Messages protocols); open weights on Hugging Face (zai-org); EU hosting via third parties (e.g. Scaleway pattern) but no native Z.ai EU offering; AWS Bedrock availability listed by innfactory. Not in the GLM Coding Plan.
- **Release / knowledge:** API 2026-08-14, weights ~2026-08-28; knowledge cutoff late 2025.
- **IDs:** `zai-org/glm-5.3`; `opencode/glm-5.3` on OpenCode Zen (prior session noted no Free ID — paid). Family: GLM-5.3-Flash (MIT, multimodal, 320B/18B), GLM-5.3-FlashX (same Flash weights, faster, 2026-09-18).
- **Context window:** 1M tokens, up to 128K output (docs.z.ai). Caveat (Flash card): HF benchmarks ran at ≤300K context; full-1M quality undocumented (stated for Flash; flagship treated with same caution).
- **Modalities:** text only in, text out; image/video input only via GLM-5.3-Flash or GLM-5V/4.6V models. Reasoning effort low/high/max (max default); reasoning CANNOT be switched off (breaking change: `thinking.type: disabled` → `enabled` + `reasoning_effort: low`). Function calling, context caching, structured output, streaming; fine-tuning (full + LoRA).
- **Pricing (as of 2026-10-09):** Z.ai per-token price list (region-dependent; not re-verified this session — prior session recorded paid tiers). Token-hungry: ~170M output tokens on the AA index vs ~110M median; ~63 tokens/s measured output — verbosity raises real cost above sticker price.
- **License:** bespoke GLM-5.3 License — commercial use, modification, fine-tuning, redistribution permitted with notice; MaaS providers with >US$10B trailing-12-month revenue (incl. affiliates) need a Z.ai security review first; embedded end-user products and pure API relay excluded. Not MIT (unlike 5.2/5.1/5/Flash).
- **Architecture:** 753B total params, MoE (active count not published this session), closed-weights→open per above; proprietary training stack on the GLM-5.2 base.

### Raw benchmarks found

> Vendor (Z.ai/HF card) + independent (Artificial Analysis) numbers labeled per row. Terminal-Bench 3.0 is a harder generation — not comparable to TB 2.x rows.

Agent / tool use:

- Terminal-Bench 3.0: **28.3** (Z.ai) vs GLM-5.2's 4.6.
- DeepSWE v1.1: **66.9%** (Z.ai) vs 5.2's 46.2% — still below frontier cluster (Muse 1.3 75.4, Astra 74.1, 3.8 Flash 73.7).
- Agents' Last Exam (CLI): **28.5** vs 5.2's 23.8.
- Artificial Analysis Intelligence Index v4.1.1: **60** (independent) — vs 5.2's 53; near GLM-5.3 (max) 60 and AA "GLM-5.3 (max) 60" peer listing from the AA Muse article.
- Tau3-Bench Banking: no verified public score found.
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- AA flags token-intensity (170M output tokens on index) as the cost-side signature; no GPQA/HLE/CritPt rows verified this session for 5.3 specifically (GPQA 68.2 / MMLU 85 / AIME 84 listed for GLM-5 base Feb 2026 in innfactory table).

Coding:

- Terminal-Bench 3.0: **28.3** — see agent section (hardest current gen).
- DeepSWE v1.1: **66.9%** — see agent section.
- SWE-Bench Pro: no verified score for 5.3 (GLM-5.2 scored 62.1, June 2026, for reference).
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found.

Security (secondary):

- CyberGym: **84.5%** vs 5.2's 77.2%.
- ExploitBench: **54.4%** vs 5.2's 24.4% (context: GPT-6 Astra 100% without safeguards; Sol 78.5).
- 2,436 vulnerability findings across 269 open-source projects reported during safety eval.

Long context:

- 1M / 128K out spec (docs.z.ai). No MRCR/RULER score published for 5.3 — no long-context retrieval score found; HF-card benchmarks ran at ≤300K (Flash card note).

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 84/100.** TB 3.0 28.3 (a 6.1x gen-jump over 5.2 on the hardest current agent bench), DeepSWE 66.9, ALE-CLI 28.5, AA Index 60 independent — strong agentic tier, but sits clearly below the 66–68+ flagships (Fable 5.1 65.7, Astra 61.2, Muse 1.3 61–62) and lacks Tau3/GDPval coverage.
- **Reasoning: 80/100.** AA Index 60 with no flagship-tier single-bench proof points this session (no GPQA/HLE/ARC rows for 5.3); GLM-5 base lineage (GPQA 68.2) sets the floor; token-intensity suggests long reasoning chains, not verified depth. Solid upper-mid.
- **Context window: 95/100.** Full 1M / 128K out — top tier on paper; docked for the ≤300K benchmark-context caveat and absence of any published retrieval score at 1M.
- **Multimodal: 20/100.** Text-only input on the flagship (image/video route to GLM-5.3-Flash/GLM-5V siblings) — per methodology, text-in/text-out baseline; the multimodal story lives in the sibling, not this model.
- **Coding: 86/100.** DeepSWE 66.9 + TB 3.0 28.3 are the coding story — biggest relative gains of the release; still a tier below the 73–75 DeepSWE frontier cluster and no SWE-Bench Pro/LiveCodeBench confirmations.
- **Cost efficiency: 62/100.** Open weights + competitive Z.ai API pricing, but AA-measured ~170M output tokens on the index (vs ~110M median) and ~63 tok/s output mean real per-task cost runs well above sticker; license friction for >$10B MaaS providers is a deployment, not price, factor.
- **Overall Score: 73/100.** (84 + 80 + 95 + 20 + 86) / 5 = 73.0 → 73. Best-fit: the open-weights (licence-caveated) choice for agentic coding and security research at flagship-adjacent quality, where self-hosting/EU data control matters more than text-only input or per-task token verbosity.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (innfactory dated GLM family compendium incl. Z.ai docs/HF card/AA figures, docs.z.ai specs, AA Muse 1.3 peer-list cross-reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.