# Kimi K3 — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI (`kimi-k3`), also `moonshotai/kimi-k3` on OpenRouter
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-06
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-06** (second pass, user-requested). Fresh sources this pass: BenchLM (`kimi-k3`, **88 rows**, **69.46/100, #17 of 1015** — was 75 rows, 69.93, #16 of 992), Moonshot launch blog, Artificial Analysis, Vals AI, ARC Prize, LlamaIndex.
> **Refreshed values:** GDPval-AA Elo **1584** (was 1533); APEX-Agents 37.6% (was 41.0%); ExtractBench 83.17%.
> **Newly captured rows:** AA EnterpriseOps-Gym **45.3%**; AA Tau3 46.0%; aaTB2.1 85.0%; cyber rows (AA Cyber Index 41.3, CWE-Bench-AA 53.3, DeepsecBench-AA 12.5, **CyberGym-E2E-AA 58.0%**); AA-AnalystAgent 38.8%; ScarfBench 61.3%; **FrontierCode 2.0 17.7%** (weak, reinforces the harness-sensitive coding cap); Finch 77.3% / b3 Agent Security 88.0% / Cyber Misuse Refusal 94.0% (via Mistral's cross-model table); **Gray Swan IPI 52.7%** (weak prompt-injection resistance).
> **Re-verified unchanged:** TB2.1 80.9–88.3%; MCPMark 94.5%; BrowseComp 91.2%; DeepSearchQA 95%; OSWorld-Verified 84.8%; TB4.0 17.17%; SWE-bench 93.4% (Vals); GPQA 92.9–93.5%; ARC-AGI-2 60.4%; AA Index 43.6; Omniscience 19.7/47.6/53.2; AA-LCR 88.7%.
> **No score change:** near-frontier open-weight profile unchanged; scores held at 90.
> Sources this pass: https://benchlm.ai/models/kimi-k3 · https://www.kimi.com/blog/kimi-k3 · https://artificialanalysis.ai/models/kimi-k3 · https://www.vals.ai/models/kimi_kimi-k3 · https://arcprize.org/results/moonshot-kimi-k3

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`kimi-k3`) re-read on 2026-10-23 carried **75 rows** (was 57) and computed **69.93/100, #16 of 992**. Newly captured then: AA Harvey LAB 94.6%, AA Agentic Index 50.6%, APEX-Agents-AA 41.3%, AA ITBench 47.7%, GDPval-AA 1533 Elo / 51.6%, AutomationBench 30.8%, SpreadsheetBench 2 34.8%, DECK-Bench 73.5%, ApprenticeBench 18%, Hermes 39.2/71.5, MazeBench 1%; FrontierSWE v2 25.9%, MLS-Bench Lite 48.3%, VulcanBench v3 73.7%, OpenHarmony 57.3%, PostTrainBench 32.0%, Bug Hunt 21.0 fixes; ExtractBench 83.17%, OfficeQA Pro 63.3%, CharXiv 91.3%/84.8%, MathVision 94.3%/97.8% Python, BabyVision 85.7%, ZeroBench 23%/41% Python, WorldVQA 51%, OmniDocBench 91.1%, PerceptionBench 58.5%, AA-MMMU-Pro 80.5%, Design Arena 1335; AA-LCR 88.7%, CritPt 23.4%, ARC-AGI-1 94.5%, ARC-AGI-2 60.4%; AA Index 43.6%, AA-GPQA 93.5%, AA-HLE 46.9%, AA-Omniscience 19.7/47.6/53.2%, MMLU-Pro 88.0%. Scores adjusted that pass: Reasoning 90→89; Overall held 90.

> **Re-verified 2026-10-18.** BenchLM (`kimi-k3`, 57 rows) computed an overall **69.96/100 (#16 of 228)**. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Independently re-sourced: GPQA 93.5% (vendor) / 92.93% (Vals); MMLU-Pro 88.0% (Vals); HLE 43.5% no-tools / 56% with tools; AA-LCR 74.7% (vendor) / 88.7% (Kilo); CritPt 23.4%; SWE-bench Verified 93.40% (Vals) / 95.10% (subset); TB2.1 88.3% (vendor) / 80.9% (Vals); TB4.0 17.17% (Vals); DeepSWE 67.5%; FrontierSWE 81.2%; ProgramBench 77.8%; SWE-Marathon 42.0; LiveCodeBench 87.2% (Vals); SciCode 58.7%; MCPMark-Verified 94.5%; MCP Atlas 84.2%; BrowseComp 91.2%; DeepSearchQA 95.0%; Toolathlon 73.2%; OSWorld-Verified 84.8% / 2.0 58.3%; GDPval-AA 1533; MMMU-Pro 81.6%; OmniDocBench 91.1%; Vals Index 50.30%. Conflicts surfaced: SWE-bench 93.4–95.1% vs 76.8% third-party; bimodal coding (TB4.0 17.2% / Code Migration 16.1%); AA index 44 vs 57 spread; modality conflict; context 1M vs 1.05M; AA-LCR 74.7 vs 88.7.

## Model card

- **Name:** Kimi K3 (Moonshot AI flagship; API ID `kimi-k3`). Not an alias of Kimi K2.7 Code.
- **Short description:** Moonshot AI's 2.8T-parameter open-weight MoE flagship (2026-07-16; weights 2026-07-27), the first open 3T-class model, for long-horizon agentic coding, knowledge work and 1M-token reasoning with native vision.
- **Provider / access:** Moonshot API (`kimi-k3`), first-party apps, OpenRouter (`moonshotai/kimi-k3`), Bedrock and 15+ providers; open weights via Hugging Face. No Zen Free ID.
- **Release / knowledge:** 2026-07-16; weights by 2026-07-27; knowledge cutoff not published.
- **IDs:** `moonshotai/kimi-k3`.
- **Context window:** 1,048,576 (1M) tokens; 131,072 max output.
- **Modalities:** text + image + video in; text out; native vision, max-effort thinking toggle.
- **Pricing (as of 2026-11-06):** $3.00 in / $15.00 out per 1M, $0.30 cache-read / $3.75 cache-write; open weights (self-host); third-party from $2.85/$14.25.
- **Architecture:** 2.8T-total sparse MoE (**104B active**, 16 of 896 experts), Kimi Delta Attention + Attention Residuals, MXFP4 weights / MXFP8 activations; Kimi K3 License.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **88.3%** (vendor) / **80.9% (Vals) / 85.0% (AA)**; TB2.0 88.3%; Terminal-Bench 4.0 **17.17%** (Vals)
- MCPMark-Verified **94.5%** (leads); MCP Atlas 84.2%; Toolathlon-Verified 73.2%; AA ITBench 47.7%; AA EnterpriseOps-Gym **45.3%**; AA Tau3 46.0%
- BrowseComp **91.2%**; DeepSearchQA 95.0%; OSWorld-Verified 84.8% / OSWorld 2.0 58.3%; JobBench 52.9%
- GDPval-AA **1584 Elo / 51.6%**; AA-Briefcase 1548; APEX-Agents 37.6%; AA Agentic Index 50.6%; AA Harvey LAB 94.6%; SpreadsheetBench 2 34.8%; DECK-Bench 73.5%
- Cyber: CyberGym-E2E-AA **58.0%**, CWE-Bench-AA 53.3, AA Cyber Index 41.3, Deepsec 12.5; Finch 77.3%, b3 Agent Security 88.0%, Cyber Misuse Refusal 94.0%; Gray Swan IPI **52.7%** (weak)

Reasoning / knowledge:

- GPQA Diamond **93.5%** (vendor/AA) / 92.93–92.9% (Vals); MMLU-Pro 88.0% (Vals)
- HLE **43.5%** no-tools / 56% with tools (AA-HLE 46.9%); AA-LCR **88.7%**; CritPt 23.4%
- ARC-AGI-1 94.5%; **ARC-AGI-2 60.4%**; AA Intelligence Index **43.6**; AA-Omniscience 19.7 / 47.6% / 53.2%; LMArena Text 1488 (#16); Vals Index 50.30%

Coding:

- SWE-bench Verified **93.40%** (Vals) / 95.10% (subset); LiveCodeBench 87.2% (Vals); Vibe Code Bench 84.97%
- DeepSWE 67.5%; FrontierSWE 81.2% / FrontierSWE v2 25.9%; ProgramBench 77.8%; SWE-Marathon 42.0; Kimi Code Bench 2.0 72.9%
- AA-SciCode 59.5% / SciCode 58.7%; AA Coding Index 76.2%; Code Migration 16.10%; CursorBench 3.2 60.8%; **FrontierCode 2.0 17.7%**; ScarfBench 61.3%

Multimodal / long context:

- MMMU-Pro 80.5–81.6% (83.4% w/ Python); OmniDocBench 91.1%; MathVision 94.3–97.8%; CharXiv 91.3%
- AA-LCR 88.7% at 1M; no standard MRCR/RULER; ExtractBench 83.17%; Design Arena 1334

### Normalized scores (1–100)

- **Tool use: 89/100.** TB2.1 80.9–88.3%, MCPMark 94.5%, BrowseComp 91.2%, OSWorld-Verified 84.8%, DeepSearchQA 95% and the new CyberGym 58.0% are elite on tool use; capped by TB4.0 17.2% and GDPval-AA 1584 (still below the 1750 ref).
- **Reasoning: 89/100.** GPQA 92.9–93.5%, HLE 56% with tools and AA-LCR 88.7% lead open weights; held by AA Index 43.6, ARC-AGI-2 60.4%, CritPt 23.4% and a low Omniscience index (19.7%).
- **Context window: 96/100.** 1M input with 131K output and AA-LCR up to 88.7%; the ≥98%-at-512K condition for 100 is unmet.
- **Multimodal: 86/100.** Native text + image + video in with MMMU-Pro 81.6% and OmniDocBench 91.1%; text-only output and the AA text+image-only conflict cap it.
- **Coding: 88/100.** Vals SWE-bench 93.4%, LiveCodeBench 87.2%, FrontierSWE 81.2%, ScarfBench 61.3% and AA-SciCode 59.5% are near-frontier; capped by TB4.0 17.2% / Code Migration 16.1% / FrontierCode 2.0 17.7%.
- **Cost efficiency: 63/100.** Premium $3/$15 with $0.30 cached maps to the ~60 anchor; nudged up for ~$2 AA cost/task and free prefix caching.
- **Overall Score: 90/100.** (89 + 89 + 96 + 86 + 88) / 5 = 89.6 → 90. Best fit: near-frontier open-weight reasoning plus a genuine 1M window and best-in-class MCP/tool use; pair with a coding specialist for hard terminal/agentic harnesses, and mind the weak prompt-injection row.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-06
- Method: re-research pass (user-requested second pass) over public internet research (Moonshot launch blog, BenchLM re-read 2026-11-05, Artificial Analysis, Vals AI, ARC Prize, LlamaIndex). Refreshed GDPval/APEX rows, captured the cyber-suite / EnterpriseOps / ScarfBench / FrontierCode 2.0 / Gray-Swan rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI — Kimi K3 launch blog](https://www.kimi.com/blog/kimi-k3)
  - [BenchLM — Kimi K3 benchmark scores](https://benchlm.ai/models/kimi-k3)
  - [Artificial Analysis — Kimi K3](https://artificialanalysis.ai/models/kimi-k3)
  - [Vals AI — Kimi K3](https://www.vals.ai/models/kimi_kimi-k3)
  - [ARC Prize — Kimi K3 results](https://arcprize.org/results/moonshot-kimi-k3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
