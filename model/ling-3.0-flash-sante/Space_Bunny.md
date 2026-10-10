# Ling 3.0 Flash Sante — findings by Space Bunny

- Source: InclusionAI / Ant Group (`inclusionai/ling-3.0-flash-sante`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Evidence caveat:** every benchmark number below is **vendor-reported by Ant with its
> launch announcement** — no independent evaluator has measured this checkpoint, and its
> fine-tuned weights are not downloadable, so nothing here has been reproduced outside the lab.
> Numbers are attributed individually; treat the capability picture as a vendor claim.
> Routing note: this is a **health/medicine** specialist, not a voice or finance model, so
> `RULES.md` keeps it under `model/` (see the Signature section for the open routing question).

## Model card

- **Name:** Ling 3.0 Flash Sante (`ling-3.0-flash-sante`) — "santé" = health
- **Short description:** InclusionAI's (Ant Group) health-and-medicine domain fine-tune of the open-weight Ling 3.0 Flash backbone, announced 2026-09-04 for medical reasoning, professional healthcare tasks, deep research and evidence-grounded retrieval, while retaining general reasoning/coding/agentic ability. Second domain-tuned Ling 3.0 member of 2026, after the finance-focused Ling 3.0 Flash Fin.
- **Provider / access:** OpenRouter `inclusionai/ling-3.0-flash-sante` (OpenAI-compatible chat completions), including a `:free` variant; Vercel AI Gateway. No OpenCode Zen ID found.
- **Release / knowledge:** Announced 2026-09-04 (2026-09-05 Beijing time); reached commercial APIs 2026-09-04. Knowledge cutoff not disclosed.
- **IDs:** `inclusionai/ling-3.0-flash-sante`, `inclusionai/ling-3.0-flash-sante-20260904`, `inclusionai/ling-3.0-flash-sante:free`
- **Context window:** 262,144 tokens input, up to 32,768–33,000 max completion (OpenRouter listing; consistent across trackers).
- **Modalities:** text in → text out; reasoning on by default and switchable; function calling supported; no image, audio or video input documented.
- **Pricing (as of 2026-10-10):** **$0.042 in / $0.123 out per 1M** on the paid OpenRouter route (post-promotion rate now published), plus a **$0.00 `:free`** variant that is rate-limited and evaluation-oriented. The $0 launch promotion ended 2026-10-04. Paid, no Zen Free ID.
- **Architecture:** 124B total / ~5.1B active sparse MoE fine-tune of Ling 3.0 Flash (hybrid-linear stack: 35 KDA + 7 Gated MLA layers, 1/64 sparse MoE). Backbone is MIT open-weight; **this fine-tune's weights are not released** (only a ModelScope listing, no HF repository).

### Raw benchmarks found

All figures below are **Ant's own**, published with the 2026-09-04 announcement; no third-party evaluator has measured the model.

Agent / tool use:

- BrowseComp (multi-agent setting): **86.89** (Ant, announcement) — evidence-grounded retrieval / search-then-answer behaviour
- Function calling: supported (OpenRouter listing)
- Terminal-Bench 2.1 / Tau3 / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- DiagnosisArena-MCQ (medical diagnosis, multiple choice): **83.83** (Ant; above GPT-5.6 Sol 81.9, Kimi K3 78.4, Gemini 3.6 Flash 76.2 in Ant's own comparison)
- AFUMED-Drug (pharmacology, dosage, contraindications, interactions): **89.59** (Ant)
- MedXpertQA-Text (open-ended expert clinical QA): **53.88** (Ant; below GPT-5.6 Sol 60.2 and Gemini 3.6 Flash 62.4)
- MedEthicAlign (medical ethics alignment): **82.1** (Ant); AFUSAFE-MedSCE internal safety score 78.6 (Ant, labelled as its own test)
- HealthBench Professional: named by Ant, **no numeric value published**
- GPQA / HLE / LCR-MLCR / CritPt / Artificial Analysis Intelligence Index: no verified public score found for Sante (an independent AA page does not exist)

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found **for Sante**
- Provisional proxy (explicitly not Sante's own measurement): its open-weight backbone Ling 3.0 Flash scores SWE-bench Pro 56.6 and SWE-bench Multilingual 72.4 on the HF leaderboard. Ant claims Sante "retains general capabilities in reasoning, coding and agentic tasks" but publishes **no regression measurement** quantifying what survives the fine-tune.

Long context:

- 262,144-token window documented, but **no long-context retrieval benchmark** (MRCR, RULER, LongBench) published for Sante — no measured value at any window length.

### Normalized scores (1–100)

- **Tool use: 84/100.** BrowseComp 86.89 in a multi-agent setup plus documented function calling and an evidence-grounded-retrieval training objective make retrieval-augmented agent work the model's declared strength; capped because no tool-specific suite (Tau2, MCP-Atlas, Terminal-Bench) has been run against it by anyone.
- **Reasoning: 82/100.** Strong in its own domain — DiagnosisArena-MCQ 83.83, AFUMED-Drug 89.59, MedEthicAlign 82.1 — but MedXpertQA-Text 53.88 shows the specialist still trails general flagships on open-ended clinical reasoning, and no general-reasoning benchmark (GPQA, HLE) has been published for it.
- **Context window: 72/100.** 262,144 tokens in with ~32,768 out is a solid window, but no long-context retrieval result has ever been published for this checkpoint, so the window is verified as a spec only, not as measured retrieval quality.
- **Multimodal: 15/100.** Text in / text out only — no image, audio, video or PDF input path is documented for Sante.
- **Coding: 58/100.** Provisional: no Sante-specific coding benchmark exists, so this is anchored on the open backbone's SWE-bench Pro 56.6 / Multilingual 72.4 and discounted for the unquantified risk that a medical fine-tune erodes general coding. Treat as the weakest-evidenced dimension in this report.
- **Cost efficiency: 95/100.** $0.042 in / $0.123 out per 1M on the paid route, plus a $0.00 `:free` endpoint, puts it among the cheapest capable models available — the standout dimension here.
- **Overall Score: 62/100.** Best fit for medical/clinical research tooling, drug-knowledge QA and evidence-grounded retrieval pipelines where near-free inference matters; general coding and reasoning users should stay on the Ling 3.0 Flash base or a frontier model.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: public internet research (Ant Ling's 2026-09-04 launch announcement, OpenRouter model page and `:free` variant, AI Stats Live / ModelCompare / LLMReference / SurfMind model records, Atlectica and independent analyst coverage of the vendor benchmark table); scores are normalized 1–100 interpretations, not official vendor scores.
- **Routing question for the orchestrator (no action taken — `RULES.md` permanence):** Sante is a health/medicine domain specialist, structurally analogous to the `models_finance/` case. `RULES.md` defines a finance routing rule and a voice routing rule but **no `models_health/` tree** (the name appears only in the file-deletion rule). As written the folder correctly stays under `model/`, and an existing folder is never re-routed by a research agent. Generalising domain routing to health is a `RULES.md` amendment plus a user-directed relocation, not an agent decision.
- Re-scoring trigger: any independent evaluation of Sante (Artificial Analysis, Vals AI, benchlm.ai), an Ant-published HealthBench Professional value, or released fine-tune weights.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- Ant Ling launch announcement (BrowseComp 86.89 multi-agent, medical benchmark set): https://www.linkedin.com/posts/ant-ling_antling-healthai-llm-activity-7501721483279278080-dDAk
- OpenRouter model page (262,144 context, ~32,768 max output, function calling, positioning): https://openrouter.ai/inclusionai/ling-3.0-flash-sante
- Atlectica vendor-table transcription (AFUMED-Drug 89.59, DiagnosisArena-MCQ 83.83, MedXpertQA-Text 53.88): https://atlectica.com/blog/specialized-medical-llms/
- Independent analyst coverage of the vendor table and its caveats (2026-09-05): https://www.orcarouter.ai/blog/what-is-ling-3-0-flash-sante
- cldnavi vendor-table transcription incl. MedEthicAlign 82.1: https://cldnavi.com/en/blog/ling-3.0-flash-guide-2026/
- OpenRouter listing transcription incl. paid rate ($0.042 / $0.123 per 1M): https://modelcompare.dev/models/openrouter/ling-3-0-flash-sante
- LLMReference record (weights not on HF; ModelScope listing; architecture): https://www.llmreference.com/model/ling-3.0-flash-sante/openrouter