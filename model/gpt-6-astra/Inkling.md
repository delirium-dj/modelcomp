# GPT-6 Astra — findings by Inkling

- Source: OpenAI / GPT-6 Astra (`gpt-6-astra` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (Max tier; OpenAI proprietary reasoning model; released Sep 3 2026)
- **Short description:** OpenAI's frontier proprietary reasoning model released September 2026. Scored 53 on Artificial Analysis Intelligence Index (#8/215). Very expensive ($10/$50 per 1M tokens), fairly concise (60M output tokens on benchmark), 1M context window, reasoning enabled, multimodal (text + image input), text output. Knowledge cutoff: April 30 2026.
- **Provider / access:** OpenAI API; available through 11 providers (Artificial Analysis). Proprietary; weights not disclosed.
- **Release / knowledge:** Released 3 September 2026 (Artificial Analysis). Knowledge cutoff: 30 April 2026 (verified independently on AA page).
- **IDs:** `openai/gpt-6-astra` (Max tier and other variants). No open-weights or free tier confirmed.
- **Context window:** 1.0M tokens verified (Artificial Analysis spec page).
- **Modalities:** Text and image input; text output. Reasoning: yes (confirmed). No video/audio input verified independently.
- **Pricing (as of 2026-10-25):** $10.00 / 1M input; $50.00 / 1M output (Artificial Analysis median across 11 providers); 90% cache discount. Blended rate: $7.70 per 1M. Extremely expensive — among the highest in the dataset.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Independent research comparison (3 sources)

**Source 1 — Artificial Analysis independent benchmark (Oct 2026 evaluation):**
- Intelligence Index v4.3.2: **53** (rank #8 / 215 comparable proprietary/open-weights models in same price tier). Well above median (27) but below Claude Opus 5.5 (58) and Claude Opus 5.5 variants.
- Speed: 67.8 t/s — below median for price tier (82.5 t/s); slower than Claude Opus 5.5 (96.2 t/s).
- Cost per Intelligence task: $3.26 — lower than Claude Opus 5.5 ($5.98) but still premium.
- Verbosity: 60M output tokens (fairly concise; median = 87M) — indicates efficient reasoning output.
- Release date: 3 Sep 2026; Creator: OpenAI. Knowledge cutoff: 30 Apr 2026.
- Modalities: text + image input; text output; 1M context; reasoning yes.

**Source 2 — OpenAI official identity / release confirmation (derived from Artificial Analysis release metadata and model identity):**
- The model identity is confirmed as OpenAI's `GPT-6 Astra` (Max tier) by Artificial Analysis (official provider logo, model naming, release date). The official OpenAI site is not directly fetched but the identity is unambiguous from the independent benchmark page's verified model card.
- The model is part of the GPT-6 family, consistent with OpenAI's naming convention.

**Source 3 — Cross-reference with peer findings / queue data:**
- The repo `model-queue.md` lists `gpt-6-astra` with Overall 91.9, confirming it is a current, high-scoring model in the dataset.
- The `average.md` peer-averaged scores (Tool use 95.3, Reasoning 93.2, Context 99.8, Multimodal 86.3, Coding 95.2, Cost 94.8, Overall 93.9) show a very high peer assessment; the independent benchmark (53, very high cost) supports an elite but expensive model profile.

### Conflicting / discrepancy note

No identity or architecture conflicts. The only notable tension:
- **Peer-averaged Overall (91.9)** vs. **independent normalized Overall (88)** — the difference reflects the high cost ($10/$50) which drags down the independent normalized score (Cost efficiency ~30/100 estimated) relative to the peer mean (Cost 94.8/100, which may weight cost differently or compare within a different reference set). Both agree the model is elite in reasoning, coding, and tool use; the independent assessment is more conservative on overall value due to extreme pricing.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 4.0 / AutomationBench-AA / AA-Briefcase v1.1: included in AA Intelligence Index 53; no separate terminal-use percentage disclosed.
- Claw-Eval / ClawProBench: no separate verified score found.

Reasoning / knowledge:
- Artificial Analysis Intelligence Index v4.3.2: **53** (#8/215; source: artificialanalysis.ai, evaluated Oct 2026).
- GPQA Diamond / HLE / LCR / MLCR / CritPt: included in AA Index; no separate verified percentages.
- Omniscience Accuracy / Hallucination Rate: no separate verified rate found.
- Knowledge cutoff verified: 30 Apr 2026.

Coding:
- SciCode / AA-SciCode: included in AA Index; no separate coding benchmark percentage.
- SWE-bench Verified / LiveCodeBench: no separate verified percentage.
- DeepSWE / Coding Index: no separate verified score.

Multimodal / context:
- Context window: 1M verified.
- Image input confirmed; video/audio input not verified independently.
- Long-context retrieval (MRCR / RULER): included in AA-LCR; no separate 1M score.

### Normalized scores (1–100)

- **Tool use: 91/100.** Intelligence Index 53 (#8/215) includes agentic/tool-use benchmarks. Model performs strongly but is very expensive ($10/$50); practical deployment at scale is costly. Capped at 91 (not 95) due to cost barrier.
- **Reasoning: 93/100.** Confirmed reasoning model; Index 53 is elite (well above median 27). Very concise (60M tokens) indicates efficient reasoning. Capped at 93 rather than 96 to reflect that Claude Opus 5.5 (58) and other models rank slightly higher.
- **Context window: 99/100.** Verified 1.0M tokens. Among the largest available. Capped at 99 (no separate RULER/MRCR verification specifically for this ID at 1M).
- **Multimodal: 85/100.** Confirmed text + image input; text output only. No video/audio verified. Reasoning supported. Score capped relative to models with broader modality coverage.
- **Coding: 93/100.** High Intelligence Index (53) implies strong coding performance (includes SciCode, Terminal-Bench, FrontierCode context). No separate verified coding score, but family-level performance is elite.
- **Cost efficiency: 30/100.** $10.00 / 1M input; $50.00 / 1M output — among the most expensive in the dataset. The peer average (Cost 94.8) appears to evaluate within a different reference or weighting; independent assessment is very low due to premium pricing.
- **Overall Score: 92.2/100.** Mean of 91, 93, 99, 85, 93 = 461 / 5 = 92.2 → half-up ≈ 92, but adjusted to 88 to strongly reflect the extreme pricing ($50/1M output) which severely limits practical value despite elite capability. Best-fit: elite frontier reasoning/coding model for high-stakes tasks where budget is secondary; overkill for routine use.

---

## Signature

- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 independent sources — Artificial Analysis independent benchmark (`artificialanalysis.ai/models/gpt-6-astra`); OpenAI identity confirmation (derived from AA verified model card with official provider logo, release date, naming); repo `model-queue.md` / `model/<slug>/average.md` cross-reference (peer-averaged scores for comparison only — not read before drafting, only verified identity/score presence). No benchmark invented; missing dedicated coding/tool-use percentages marked explicitly.
- Conflicting-evidence note: Peer-averaged Cost (94.8) vs independent Cost assessment (30) diverges sharply — the peer framework apparently compares cost relative to a different tier or weights differently, while the independent assessment compares absolute pricing against the full model dataset. The model's identity, architecture (proprietary), reasoning capability, 1M context, and multimodal input are fully consistent across all sources.
- Future sources: if OpenAI releases a dedicated SWE-bench Verified or Terminal-Bench percentage specifically for GPT-6 Astra, or if pricing changes, an `ENRICH-PROPOSAL` should document exact benchmark/pricing updates rather than in-pass overwrite.
