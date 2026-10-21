# GLM 5.3 Free — findings by GLM 5.2 Coding

- Source: Z.AI / OpenCode Zen (`glm-5.3-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Free OpenCode Zen promotional tier of Z.AI's flagship open-weights GLM-5.3 (753B MoE, GLM-5.3 License), optimized for agentic software development, complex reasoning, and multi-step tool execution. Same weights as the paid `glm-5.3` entry.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` — `opencode/glm-5.3-free` (OpenAI-compatible); underlying weights on Hugging Face (`zai-org/GLM-5.3`) and via DeepInfra/FriendliAI/Novita/Z.AI APIs.
- **Release / knowledge:** GLM-5.3 released 2026-08-14 (llm-stats.com); knowledge cutoff not published (system card arXiv:2602.15763).
- **IDs:** `opencode/glm-5.3-free`; paid twin `opencode/glm-5.3`; upstream `zai-org/glm-5.3`.
- **Context window:** 204K on the Zen free tier (project meta); the underlying model supports up to 1.0M/1.0M via DeepInfra (llm-stats provider table) — Zen serving is reduced.
- **Modalities:** text in/out only on Zen (project meta); no image input advertised for GLM-5.3.
- **Pricing (as of 2026-09-17):** Free on OpenCode Zen (promotional tier). Paid equivalent: from $1.20/$4.00 per 1M (DeepInfra), $1.40/$4.40 via Z.AI, cached input $0.12–0.26.
- **Architecture:** Z.AI GLM-5 family MoE transformer, 753B total parameters (llm-stats model-size entry), open weights under GLM-5.3 License (commercial use allowed; >$10B-revenue MaaS requires Z.AI security review).

### Raw benchmarks found

Agent / tool use:

- TAU-bench: no verified public score found for GLM-5.3
- Terminal-Bench: no verified public score found for GLM-5.3
- BrowseComp: no verified public score found for GLM-5.3
- Toolathon: no verified public score found for GLM-5.3

Reasoning / knowledge:

- GPQA Diamond / HLE / AIME / MMLU-Pro: no verified public score found for GLM-5.3 (llm-stats dataset tables render empty; Z.AI blog not text-extractable this session)

Coding:

- SWE-bench Verified / DeepSWE / LiveCodeBench: no verified public score found for GLM-5.3

Long context:

- 204K Zen window verified via project meta; underlying 1M/1M capacity documented (llm-stats provider table); MRCR/RULER retrieval values: no verified public score found

Multimodal (input-side):

- Not applicable — text-only model per project meta and provider listings; no image/video/audio input

### Normalized scores (1-100)

- **Tool use: 76/100.** Agentic multi-step tool execution is the model's stated specialty (Z.AI positioning + free Zen tier explicitly advertised for "fast agentic coding and tool calls"); capped by zero extractable public agent-benchmark numbers this session.
- **Reasoning: 74/100.** Flagship-tier MoE (753B) with stated complex-reasoning focus; capped by zero extractable public reasoning-benchmark numbers this session.
- **Context window: 82/100.** 204K on the free tier is solid mid-high; underlying 1M capacity exists but is not what Zen free serves; capped by missing retrieval evidence.
- **Multimodal: 20/100.** Text-only input/output — effectively single-modality.
- **Coding: 79/100.** Agentic software development is the headline use case (flagship of the GLM-5 coding line, Zcode playground); capped by zero extractable public coding-benchmark numbers this session.
- **Cost efficiency: 100/100.** Free on the Zen promotional tier; even paid ($1.20/$4.00) undercuts Claude Sonnet-class pricing by ~40%.
- **Overall Score: 66/100.** Mean of five quality dims (76+74+82+20+79)/5 = 66.2 → 66. Best-fit: zero-cost agentic coding agent workloads; treat capability scores as positioning-derived estimates pending extractable benchmark tables.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-09-17
- Method: public internet research (llm-stats.com GLM-5.3 provider/spec/license tables; OpenCode Zen docs; project meta). Benchmark tables on llm-stats rendered empty this session, so capability scores lean on stated model positioning and architecture facts; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.