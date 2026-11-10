# Ling 3.0 Flash Fin — findings by Qwen 3.8 Flash

- Source: InclusionAI / Ant Group (`opencode/ling-3.0-flash-fin`) — finance mirror tree
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin
- **Short description:** InclusionAI's (Ant Group) **first finance-enhanced model in the Ling family** — Ling-3.0-flash continued-trained on financial data assembled with institutions and domain experts. Targets **end-to-end investment research**: source-grounded retrieval across annual reports/filings, valuation modeling, spreadsheet work, and long-horizon agent tasks. Keeps base shape; thinking on by default; tool calling.
- **Provider / access:** Open weights (MIT) on HuggingFace/ModelScope; served via DeepInfra (`deepinfra/inclusionAI/Ling-3.0-flash-Fin`), Novita, and OpenCode Zen. Zero-data-retention routes available.
- **Release / knowledge:** Announced late Aug 2026, open weights released **2026‑09‑11**.
- **IDs:** `opencode/ling-3.0-flash-fin` (meta); `inclusionAI/Ling-3.0-flash-Fin` (HF).
- **Architecture:** **124 B MoE, 5.1 B active**/token.
- **Context window:** **256K–262K** (routes list 262K; 32K max output on some trackers).
- **Modalities:** **text in / text out only.**
- **Pricing (paid):** **$0.06 / $0.18 per 1M** (DeepInfra; cache read $0.01), Novita $0.07/$0.22. (The $0 Zen promo route is the sibling `ling-3.0-flash-fin-free` folder.)

### Raw benchmarks found (exact-ID)

Independent (Artificial Analysis, via Opper catalogue for `ling-3-0-flash-fin`):

- **Intelligence Index (prior version): 22.6** — "Efficient" tier; global rank **#143 / 511**.
- **Long-context reasoning: 74 %** (the standout row) · **Humanity's Last Exam: 23 %** · HLE-Diamond: 5 %.
- **SciCode: 42 %** · **Terminal-Bench 4.0: 0 %** (no general agentic-terminal capability).
- **GDPval: 30 %** · GDP.pdf: 5 % · AutomationBench: 7 % · Briefcase Elo: 959.

Finance-domain (InclusionAI, vendor — released alongside FinFIRST):

- Evaluated on **FinFIRST, FinSearchComp Verified, FinCRAFT, Finance Agent, APEX-Agents, SpreadsheetBench, τ³-Banking**; reports results competitive with far larger general models, best where the task hinges on source selection or heavy tool use. **Not independently reproduced** here.

### Normalized scores (1–100)

> General-rubric fit is **poor** for a finance-tuned efficient MoE: the AA independent rows show weak *general* agentic/coding but strong *long-context* reasoning. Domain strength is real but vendor-only. Overall = half-up mean of five quality dims, Cost excluded.

- **Tool use: 48/100.** General agentic rows are weak (AutomationBench 7 %, GDPval 30 %, Terminal-Bench 0 %) — the honest ceiling for tool use as measured. Its finance-agent tuning (τ³-Banking, FinCRAFT) is the design target but vendor-stated, so not credited into the general score.
- **Reasoning: 52/100.** Intelligence Index 22.6 and HLE 23 % are efficient-tier, but **long-context reasoning 74 %** is genuinely strong for document-grounded work. Net mid; finance-domain reasoning not independently verifiable.
- **Context window: 72/100.** **256K–262K** → 200K–500K band (65–84); scored 72.
- **Multimodal: 15/100.** **Text-only** in/out — scored at the text-only floor.
- **Coding: 55/100.** SciCode 42 % is respectable; Terminal-Bench 0 % caps agentic coding hard. Vendor claims "retains strong coding and math" from base, but the measured general coding rows are modest → mid.
- **Cost efficiency: 96/100.** $0.06/$0.18 with $0.01 cache is very cheap for the paid route. Excluded from Overall.
- **Overall Score: 48/100.** Mean of Tool 48, Reasoning 52, Context 72, Multimodal 15, Coding 55 = 242/5 = 48.4 → **48**. Honest read: a **cheap, efficient finance-domain specialist whose general-rubric score is dragged down by weak general agentic rows (TB 0 %, GDPval 30 %) and text-only modality**, while its real value (source-grounded investment research, long-doc reasoning, spreadsheets) sits on vendor eval outside this rubric. Divergence noted: other raters score this family higher — my independent AA-anchored read is lower on general dims by design.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥3 qualifying acquisitions (HuggingFace model card `inclusionAI/Ling-3.0-flash-Fin`, Opper catalogue page carrying **Artificial Analysis independent** rows for `ling-3-0-flash-fin`, ModelScope + InclusionAI release notes). Scored on **exact-ID independent AA rows** (Index 22.6, SciCode 42 %, TB 0 %, GDPval 30 %, LCR 74 %, HLE 23 %) + vendor finance eval flagged as non-reproducible. **Did not** import base Ling-3.0-flash general scores. Flagged: (a) scaffolded `meta.json` placeholder superseded by verified 124B/5.1B, 256–262K, $0.06/$0.18; (b) **general-rubric misfit** for a domain specialist — low Overall is honest, not a quality verdict; (c) finance benchmark leadership is vendor-stated.
- Revisit trigger: InclusionAI or a third party publishes independent finance-benchmark numbers (FinFIRST/FinCRAFT/τ³) on a standard harness for the exact ID.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
