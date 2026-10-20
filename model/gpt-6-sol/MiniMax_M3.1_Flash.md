# GPT-6 Sol — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's September-2026 GPT-6 workhorse — the model that cut the price of the Sol line by half ("reducing API prices for Sol and Luna by 50% compared with their GPT-5.6 promotional pricing") and, per ARC Prize, the first model to post a verified **ARC-AGI-1 95.5% and ARC-AGI-2 89.6%** at max reasoning, alongside a FrontierMath Tier-4 90.0%. It is now **deprecated** in favour of GPT-6.1 Sol ("See GPT-6.1 Sol for the newer Sol model"), and it is the model Simon Willison uses as his default Codex model.
- **Provider / access:** OpenAI API `gpt-6-sol` (Chat Completions, Responses, Batch; no Live/Realtime/Fine-tune/Assistants); OpenRouter `openai/gpt-6-sol` (+ `openai/gpt-6-sol-pro`, "served with `reasoning.mode` set to `pro`", and `:batch`); OpenCode Zen `opencode/gpt-6-sol` (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** released **2026-09-22** (launch blog; AA "was released on September 22, 2026"; OpenRouter `created` 2026-09-22). Knowledge cutoff **April 20, 2026**.
- **IDs:** `gpt-6-sol` (OpenAI API), `openai/gpt-6-sol` / `openai/gpt-6-sol-pro` / `:batch` (OpenRouter), `opencode/gpt-6-sol` (Zen). There is **no** `gpt-6-sol-daybreak-blue` on OpenRouter; OpenAI's "Daybreak" is a **cyber** line (`gpt-5.6-cyber`, `gpt-5.5-cyber`).
- **Context window:** **1,050,000 tokens**, **922,000 max input**, **128,000 max output**.
- **Modalities:** text and image in, text out. Reasoning effort: "none, low, medium (default), high, xhigh, and max". Tools: web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search. Rate limits: Build 5,000 RPM / 1M TPM; Launch 10,000 / 4M; Grow 15,000 / 40M.
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$2.00**, cached input **$0.20**, cache write **$2.50** (1.25× the uncached rate), output **$10.00** (≤272K); >272K **$4.00 / $0.40 / $5.00 / $15.00** — "Prompts with more than 272K input tokens are priced at 2x input and cache rates and 1.5x output"; Batch & Flex 50%; Fast 2×; **no Ultrafast row** for Sol (that tier lists only `gpt-6-astra` and `gpt-6.1-sol`); regional +10%. Simon Willison: "$2/M, $0.20/M cached, $10/M" — "half the price of the *promotional* pricing for those models".
- **Architecture:** proprietary, closed weights; parameter count not disclosed. System card: GPT-6 Sol and Luna are **critical in cyber**, high in bio/chem.

### Raw benchmarks found

> OpenAI's launch numbers are marked "vendor" (effort labelled per row); Artificial Analysis, ARC Prize, the BenchLM ledger and the system card are independent readings.

Agent / tool use:

- AutomationBench 1.0.6 (Zapier): **33.2%**, **$0.27 per task** at xhigh (vendor) / **61.63%** (AA objective-share)
- Agents' Last Exam V1: **56.4%** at max (vendor) / 56.4% (via BenchLM)
- OSWorld 2.0 (offline): **60.5%** at xhigh (vendor) — "60.5% versus 60.3%" against Opus 5 at medium
- ExploitGym: **22.1%** (system card) — "GPT-6 Sol and GPT-6 Luna successfully develop working exploits on 22.1% and 11.6% of challenges"
- Hermes Index **44.1%** and 150 agent tasks **73.5%** (via BenchLM); CWE-bench v1 **52.0%**; SEC-Bench Pro **66.3%**; ITBench-AA **49.44%** (AA); GDPval-AA **1508.23** (AA, normalized 50.4%); AA-Briefcase Elo **1480.92**; Gray Swan IPI attack success **10.1%**; MazeBench **7%**
- Tau2 / Tau3-banking: **not measured** (AA nulls); Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- FrontierMath v2: Tiers 1–3 **89.825%**, Tier 4 **90.000%** (Epoch AI, via BenchLM) — the Tier-4 figure is the highest measured in the catalogue
- ARC-AGI (ARC Prize, verified, per effort): ARC-AGI-1 / -2 — Max **95.5 / 89.6**, xhigh 92.7/78.1, high 91.0/68.9, medium 83.7/57.8, low 72.2/31.5, none 29.3/1.7. **ARC-AGI-3: 4.6%** on the Standard harness vs **23.03%** on the Provider Adapter harness (max)
- HealthBench (system card): Professional **60.8** length-adjusted (raw 59.5), HealthBench **53.2** (raw 47.1), Hard **30.1** (raw 22.1), Consensus **96.2**
- AA-LCR v1.1 **83.67%** (AA); HLE **47.91%** (AA); CritPt **30.86%** (AA); MLCR-AA **16.11%** (AA); Harvey LAB 3.61% (AA); Omniscience index 27.12, accuracy **54.48%**, hallucination rate **60.12%** (AA)
- Artificial Analysis Intelligence Index: **48** (rank **#26 / 217**; raw 47.63) / 47.6 (via BenchLM). **OpenAI publishes no intelligence-index claim for Sol.**
- GPQA Diamond, AIME25, HLE-Diamond, FrontierMath-official, MRCR: **not published** for Sol by OpenAI (AA's GPQA field is null for this model)

Coding:

- DeepSWE v1.1: **68.8%** at max (vendor) / 68.8% (via BenchLM)
- Terminal-Bench 4.0: **43.94%** (AA) — no official-board row retrievable; Terminal-Bench-Science 0.1 **30.0%** (AA); Terminal-Bench 2.1: **not measured** (AA null) and not published by OpenAI
- SciCode **57.64%** (AA); FrontierCode 1.1: **not measured** (AA null) — OpenAI says only that "GPT-6 Sol improves substantially over GPT-5.6 Sol" with no number
- No SWE-bench, LiveCodeBench, CursorBench or Vibe Code Bench figure for Sol
- AA Coding Agent Index: **57** (AA article) / 62% for AutomationBench-AA (article)

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 80/100.** A well-rounded agentic profile — Agents' Last Exam **56.4%** (best-verified in the BenchLM catalog for this slot), OSWorld 2.0 60.5%, Hermes Index 44.1% with 150 agent tasks 73.5%, ITBench-AA 49.44%, GDPval-AA 1508.23, AA-Briefcase Elo 1480.92, SEC-Bench Pro 66.3%, CWE-bench 52.0%, ExploitGym 22.1%, IPI attack success 10.1%. Capped by the rubric's anchors (tau3 ~50%+ → not measured; GDPval ~1750+ → 1508), by AutomationBench at 33.2% in OpenAI's own Zapier run, by Terminal-Bench 4.0 at 43.94%, and by MazeBench 7% and Harvey LAB 3.61%.
- **Reasoning: 89/100.** FrontierMath v2 **89.825% (T1–3) and 90.000% (T4)** — the highest FrontierMath Tier-4 result measured anywhere in this dataset — ARC-AGI-1 **95.5%** and ARC-AGI-2 **89.6%** at max (ARC Prize, verified), AA-LCR 83.67%, HealthBench Professional 60.8 and Consensus 96.2, CritPt 30.86%, Omniscience accuracy 54.48% with the hallucination rate cut to 60.12% ("cuts its hallucination rate from 92% to 60%"). Held below 91 because the current AA Intelligence Index is **48** (under the rubric's 60+ anchor), because **GPQA Diamond is unmeasured** for Sol, because **ARC-AGI-3 is only 4.6%** on the standard harness (23.03% with the provider adapter), and because MLCR-AA is 16.11% and Harvey LAB 3.61%.
- **Context window: 95/100.** 1,050,000 tokens with a 922,000 max input and a 128,000 max output — the rubric's top tier (≥1M = 95–100), with the output cap above the 64K line. Not 100: **no MRCR, GraphWalks or RULER measurement exists for Sol**, so the rubric's "≥98% retrieval at 512K+" condition is undemonstrated, and the >272K tier doubles input and 1.5× output.
- **Multimodal: 70/100.** Text and image in, text out, with real vision evidence — MMMU-Pro **82.95%** (AA), GDP.pdf 25.2% all-pass, plus the full computer-use toolchain (hosted_shell, apply_patch, computer_use) evidenced by OSWorld 60.5% and ScreenSpot-class results. The rubric's "+image in = 60–70" band is the ceiling and is met at its top: no video or audio input is documented, and there is no non-text output.
- **Coding: 82/100.** Terminal-Bench 4.0 **43.94%** (AA, the best Terminal-Bench 4.0 score in this batch), DeepSWE 68.8%, Terminal-Bench-Science 30.0%, SciCode 57.64%, AA Coding Agent Index 57. Capped by the absence of any Terminal-Bench 2.1, SWE-bench or LiveCodeBench figure (AA's TB 2.1 and FrontierCode fields are null for Sol), by DeepSWE 68.8% (under the rubric's 74% anchor), and by FrontierMath being a maths rather than a software-engineering result.
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/gpt-6-sol` — is billed at **$2.00 in / $10.00 out** per 1M (≤272K) and $4.00/$15.00 above it, with a $0.20 cached read and $2.50 cache write. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $2/$10 at roughly 78; Artificial Analysis measures **$1.04 per Index task** (#56/114) and 77M output tokens make Sol the *most concise* of the 2026 GPT-6 flagships (#54/116 verbosity). Batch halves the rate; there is no Ultrafast row.
- **Overall Score: 83.2/100.** (80 + 89 + 95 + 70 + 82) / 5 = 83.2 — best-fit: the **best value in the GPT-6 line** — FrontierMath Tier 4 at 90%, verified ARC-AGI-2 89.6%, the strongest Terminal-Bench 4.0 score in this dataset (43.94%) and a hallucination rate cut to 60%, all at $2/$10 with 90%-off cache reads; the caveats are the unmeasured reasoning anchors (GPQA, TB 2.1, τ-bench) and ARC-AGI-3 at 4.6%.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AutomationBench — 33.2% (OpenAI, Zapier 1.0.6, xhigh) vs 61.63% (AA AutomationBench-AA).** Different benchmarks *and* metrics (task pass rate vs share of task objectives), and different efforts; not reconcilable, so the strict figure is used.
2. **AA cost per task — $1.04 (model page) vs $1.06 (AA's 2026-09-22 article).** Index-version drift between v4.3 and v4.3.2; the current value is used.
3. **AA index 48 (raw 47.63) vs BenchLM 47.6%** — the same source at different rounding; OpenAI publishes no index claim, so there is no vendor-vs-tracker conflict here.
4. **ARC-AGI-3 — 4.6% (Standard harness) vs 23.03% (Provider Adapter).** The adapter "preserves opaque reasoning state"; the standard-harness number is the one that informs the Reasoning score.
5. **HealthBench 47.1 (raw) vs 53.2 (length-adjusted)** — and Sol's mean answers are ~45% shorter, which depresses unadjusted coverage; both are recorded.
6. **"22.1" appears twice in OpenAI's own material** — ExploitGym 22.1% and the *unadjusted* HealthBench Hard 22.1; the length-adjusted Hard value is 30.1. Noted so the two are not confused.
7. **AA's nulls vs OpenAI's qualitative claim** — Artificial Analysis publishes no Terminal-Bench 2.1, GPQA, τ³-Banking or FrontierCode value for Sol, while OpenAI says "GPT-6 Sol improves substantially over GPT-5.6 Sol" on FrontierCode with no number. The missing anchors are treated as missing, and are why Reasoning and Coding are not scored at the top.
8. **CWE-bench 52.0% and SEC-Bench Pro 66.3%** are BenchLM-attributed and were not opened at source during this pass — labelled as such.
9. **AA's per-evaluation data for Sol is frozen** ("Results for other workloads are historical and no longer updated"), so today's numbers describe the release-time configuration.

### Notes on identity

- `gpt-6-sol` is a distinct model from `gpt-6-astra` (the top tier, $10/$50, AA index 53), from `gpt-6.1-sol` (its September successor, scored separately) and from `gpt-5.6-sol` (the previous generation, scored separately).
- `openai/gpt-6-sol-pro` on OpenRouter is the same model with `reasoning.mode: pro` — a serving route, not a separate checkpoint.
- There is no "Daybreak Blue" GPT-6 Sol: the AA slug `gpt-6-sol-daybreak-blue` exists as a tracker page, but no such model appears in OpenRouter's 470-model catalogue; OpenAI's Daybreak branding belongs to the cyber line (`gpt-5.6-cyber`, `gpt-5.5-cyber`).
- Effort levels (none/low/medium/high/xhigh/max) are parameters; OpenAI's published rows are labelled per effort (xhigh for AutomationBench and OSWorld, max for Agents' Last Exam and DeepSWE), and ARC Prize's ladder shows ARC-AGI-2 falling from 89.6% (max) to 31.5% (low).

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, the GPT-6 Sol launch blog and the GPT-6 system card; independent trackers Artificial Analysis (model page with all six effort variants, per-evaluation payload, launch article), ARC Prize (verified, twelve harness configurations), the BenchLM evidence ledger, Epoch AI's FrontierMath figures, OpenRouter and OpenCode Zen catalogs, and Simon Willison's pricing note. Vendor-vs-independent conflicts — including the AutomationBench metric mismatch and the ARC-AGI-3 harness split — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Sol.md`, using the same headings.
