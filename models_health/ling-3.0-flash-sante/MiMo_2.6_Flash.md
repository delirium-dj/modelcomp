# Ling-3.0-flash-sante — findings by MiMo 2.6_Flash

- Source: InclusionAI / Ant Group (`ling-3.0-flash-sante`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash-sante
- **Short description:** Health and medicine-focused MoE model from InclusionAI, built on Ling-3.0-flash (124B total / 5.1B active). Excels in medical knowledge reasoning, clinical safety, evidence-based retrieval, and long-horizon medical tasks while retaining strong general reasoning, coding, and agentic capabilities from the base model. Domain specialist in the Ling 3.0 family (alongside Fin, VL siblings).
- **Provider / access:** InclusionAI API; OpenRouter free tier `inclusionai/ling-3.0-flash-sante:free`; ZenMux (`inclusionai/ling-3.0-flash-sante`); no public open weights for the Sante fine-tune (base Ling-3.0-flash is MIT — Sante served as API).
- **Release / knowledge:** Released 2026-09-04 (OpenCode Data / lmmarketcap). Knowledge cutoff not disclosed.
- **IDs:** `inclusionai/ling-3.0-flash-sante` (OpenRouter / ZenMux).
- **Context window:** 262,144 tokens (262K); max output 32,768 tokens (33K).
- **Modalities:** text in; text out; reasoning; tool calling.
- **Pricing (as of 2026-10-13):** OpenRouter free tier ($0/$0); ZenMux $0.06 / 1M input, $0.18 / 1M output; OpenCode Data $0.07 / $0.22. Cached input ~$0.01.
- **Architecture:** Hybrid-linear MoE (same as Ling-3.0-flash base): 124B total, 5.1B active; 35 KDA + 7 Gated MLA (5:1); health/medicine post-training specialization.

### Raw benchmarks found

Agent / tool use:

- Inherits Ling-3.0-flash agentic stack (Claude Code / OpenClaw / agent-harness compatibility from base); no Sante-specific public agentic figures found
- Tool calling supported (OpenCode / ZenMux)

Coding / general (inherited from base, not re-benchmarked for Sante):

- Base Ling-3.0-flash: SWE-Pro 56.6%, SWE-V 65.2% (Vals), LCB 84% (Vals), Terminal-Bench 2.1 ~50–55%
- Sante retains "strong general capabilities in reasoning, coding, and agentic tasks" (ZenMux / vendor description) but no independent re-score published for the domain fine-tune

Medical / knowledge (domain focus, no public MedQA/MedBench figures found in excerpts):

- Marketed strengths: medical knowledge reasoning, clinical safety, evidence-based retrieval, long-horizon medical tasks
- No public MedQA / PubMedQA / clinical benchmark scores found in reviewed sources

LMMC composite (lmmarketcap):

- Overall Score: **40/100**; Capabilities 50/100; Pricing 100/100; Context Window 86/100; Coding rank ~#270/424

### Normalized scores (1–100)

- **Tool use: 62/100.** Inherits base Ling-3.0-flash agent integrations and tool calling. Capped by zero Sante-specific agentic re-benchmarks and narrower general-purpose agent tuning than the parent.
- **Reasoning: 72/100.** Strong general reasoning retained from base (GPQA-D 84–85, AIME26 93 on parent) plus medical specialization. Capped by no public medical-reasoning benchmark figures for Sante itself.
- **Context window: 80/100.** 262K native (inherited). Capped by no long-context retrieval measurements specific to medical workloads.
- **Multimodal: 15/100.** Text-only — no image/audio/video input. Capped at text-only floor.
- **Coding: 62/100.** Retains base coding strength (Ling-3.0-flash SWE-Pro 56.6 / LCB 84) but medical fine-tune may trade off pure code-gen edge; no re-benchmark. Capped by unverified coding retention.
- **Cost efficiency: 95/100.** Free OpenRouter tier + $0.06–0.07 API for 5.1B-active medical specialist is exceptional value. Among cheapest domain models tracked.
- **Overall Score: 58/100.** Mean of (62 + 72 + 80 + 15 + 62) / 5 = 58.2 → **58**. Best-fit recommendation: free/cheap medical-domain agent for health Q&A, clinical documentation, and evidence-based retrieval pipelines — prefer base Ling-3.0-flash for pure coding/general workloads and larger medical-tuned models when clinical accuracy is safety-critical.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (OpenRouter model page, ZenMux, OpenCode Data, lmmarketcap.com, HF inclusionAI/Ling-3.0-flash base card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
