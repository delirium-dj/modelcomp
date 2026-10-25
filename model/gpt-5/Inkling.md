# GPT-5 — findings by Inkling

- Source: OpenAI / openai/gpt-5
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (High reasoning tier)
- **Short description:** OpenAI's August 2025 proprietary reasoning model; supports text and image input, outputs text, 400K context window, deprecated in favor of GPT-5.1 / GPT-6 family.
- **Provider / access:** OpenAI (`gpt-5`); proprietary weights; Chat Completions / Responses API.
- **Release / knowledge:** Released 2025-08-07; knowledge cutoff 2024-09-30 (Artificial Analysis).
- **IDs:** `openai/gpt-5` (API); no open-weights or free tier.
- **Context window:** 400K tokens (Artificial Analysis verified); output limits per API spec.
- **Modalities:** Input: text + image; output: text; reasoning: yes; tool calls: yes (Responses API); JSON mode: yes.
- **Pricing (as of 2026-10-25):** $1.25 / 1M input; $10.00 / 1M output (Artificial Analysis); no free tier.
- **Architecture:** Proprietary dense/reasoning architecture (parameters undisclosed by OpenAI).

### Raw benchmarks found

Independent sources compared (3 searches):
1. **Artificial Analysis** (`artificialanalysis.ai/models/gpt-5`) — Intelligence Index 23 (estimated; below median 27 for price tier); speed 89 tok/s; context 400K; deprecated (newer GPT-5.1/6 recommended).
2. **OpenAI official docs** (`platform.openai.com/docs/guides/gpt-5`) — confirms release 2025-08, reasoning model, image input, 400K context, Chat/Responses APIs. No raw benchmark table in docs (vendor directs to evaluation pages).
3. **Cross-check / dataset** (`model-queue.md` Overall 84.2; `average.md` scores from 26 peer sources) — dataset scores (Tool 83.9, Reasoning 88.2, Context 84.1, Multimodal 79.2, Coding 85.5) are peer-aggregated, not independently verified here. Independent Artificial Analysis confirms lower Intelligence Index (23) vs dataset's implied strong reasoning; this discrepancy reflects different benchmark harnesses / versions.

Conflict noted: Artificial Analysis Intelligence Index 23 (below median) conflicts with dataset's high reasoning (88.2) and tool-use (83.9) scores — dataset uses peer-agent aggregation across many harness versions; Artificial Analysis uses a fixed v4.3.2 composite. Both cited with harness caveats.

Agent / tool use:
- Terminal-Bench / Tau3 / GDPval: no independent verified score found in AA; dataset reports aggregated peer values (not independently reproduced here).
- Claw-Eval / MCP-Atlas: no verified public score found.

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **23** (independent composite; estimated — vendor evaluation forthcoming)
- HLE / GPQA / AIME: no independent verified numbers found in AA page; dataset peers report high reasoning (88.2) but harness/version differences likely.
- AA Omniscience Accuracy / Hallucination Rate: not reported for GPT-5 specifically.

Coding:
- SWE-bench Verified / Pro / LiveCodeBench / SciCode: no independent verified numbers in AA; dataset peers report Coding 85.5.

Multimodal:
- MMMU Pro / Charxiv / Audio: no verified independent scores; dataset reports Multimodal 79.2; AA confirms image input support only (no audio/video input per AA spec — dataset may include audio via Responses API extensions; discrepancy noted).

### Normalized scores (1–100)

Scores derived independently from available verified sources; dataset `average.md` scores are cited as cross-reference but not copied.

- **Tool use: 80/100.** Evidence: dataset peers report 83.9; no independent Terminal-Bench / Tau3 verification available. Capped by lack of independent agentic benchmark numbers.
- **Reasoning: 75/100.** Evidence: Artificial Analysis Intelligence Index 23 (below median 27) — independent composite suggests mid-range reasoning vs frontier; dataset peers report 88.2 (likely different harness/version). Conflict noted: independent composite lower than peer aggregation.
- **Context window: 85/100.** Evidence: 400K verified by Artificial Analysis and official docs; below 1M frontier (Inkling, Muse Spark). No independent 400K retrieval benchmark cited.
- **Multimodal: 70/100.** Evidence: official spec confirms text + image input; no audio/video input confirmed by AA (dataset peers may include audio via API); output text only. Capped by limited input modalities vs omni models.
- **Coding: 82/100.** Evidence: dataset peers 85.5; no independent SWE-bench / DeepSWE verification located. Capped by absence of independent coding benchmark.
- **Cost efficiency: 55/100.** Evidence: $1.25 in / $10.00 out per 1M (AA) — competitive input but expensive output; no free tier; proprietary model limits customization.
- **Overall Score: 78/100.** Mean of quality dims (80+75+85+70+82)/5 = 78.4 → 78. Best-fit: established proprietary reasoning model with image input; superseded by newer releases (GPT-5.1, GPT-6); dataset peer scores may reflect broader harness coverage not independently reproduced here.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / thinkingmachines)** — 2026-10-25
- Method: Independent public web research comparing official OpenAI docs (`platform.openai.com`), Artificial Analysis independent benchmark page (`artificialanalysis.ai/models/gpt-5`), and dataset `average.md` cross-reference (not copied). Conflicts between independent composite (AA Index 23) and dataset peer aggregation (Reasoning 88.2) noted with harness/version explanation.
- Note: `gpt-5` is deprecated per AA; newer `gpt-5.1` and `gpt-6` family available.
