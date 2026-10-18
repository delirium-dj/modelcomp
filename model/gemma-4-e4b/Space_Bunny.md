# Gemma 4 E4B — findings by Space Bunny

- Source: Google DeepMind (`google/gemma-4-E4B` / `google/gemma-4-E4B-it`; hosted as `opencode/gemma-4-e4b`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-05 (Overall 63.6).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B (instruction-tuned variant: Gemma 4 E4B IT)
- **Short description:** Google's edge-optimized Gemma 4 member — 4.5B effective parameters (8B with per-layer embeddings), dense, multimodal with text/image/audio input and text output, and a 128K context window. Built for phones, laptops and single-board hardware (2.5 GB mobile build) with native ASR and speech translation. Roughly matches Gemma 3 27B non-thinking on most evals at ~6x fewer effective parameters. Not an alias of another entry: E2B, 12B Unified, 26B A4B and 31B are separate Gemma 4 members.
- **Provider / access:** open weights on Hugging Face (`google/gemma-4-E4B`, `google/gemma-4-E4B-it`) under Apache 2.0, with BF16, SFP8, Q4_0/GGUF, mobile and `-unquantized`/assistant QAT checkpoints plus a 77M-param MTP drafter; locally via llama.cpp / MLX / Ollama / LiteRT (`litert-lm serve`, OpenAI-compatible). Artificial Analysis lists exactly **one** API provider for the model (DeepInfra). Fireworks carries it as `accounts/fireworks/models/gemma-4-e4b` but marks it **Kind: Base model**, Serverless **Not supported**, image input **Not supported** and function calling **Not supported** — i.e. not the instruction-tuned multimodal path.
- **Release / knowledge:** Gemma 4 family released April 2026 (Artificial Analysis: 2026-04-03; DeepInfra blog: April 3, 2026). Knowledge cutoff not stated in any reviewed first-party source. Third-party trackers disagree with each other (LLMReference says 2026-03-31 and "4B"; getdeploying says Jan 2025) — not adopted.
- **IDs:** `google/gemma-4-E4B`, `google/gemma-4-E4B-it`; hosted `opencode/gemma-4-e4b`; AA slugs `gemma-4-e4b` and `gemma-4-e4b-non-reasoning`.
- **Context window:** **128K tokens (131,072)** — first-party confirmed in the Google Gemma 4 model card architecture table (E4B column: "128K tokens"). 42 layers, 512-token sliding window, 262K vocabulary.
- **Modalities:** **Text, image, audio** in; **text** out — first-party confirmed in the model card's modality table. Thinking mode; native function calling; native ASR and speech-to-translated-text; multilingual over 140+ languages. Vision encoder ~150M params, audio encoder ~300M params. ⚠️ **Aggregator conflict:** CloudPrice's capability table claims Gemma 4 E4B is **text-only, 1/5 input modalities, 0/13 capabilities** (no reasoning, no function calling, no structured outputs). This flatly contradicts Google's own model card and is a broken aggregation — do not use it.
- **Pricing (as of 2026-10-17): UNRESOLVED — a genuine 10× conflict, deliberately not resolved.** Apache 2.0 open weights (self-host: BF16 17.9 GB, SFP8 8.9 GB, Q4_0 4.5 GB, mobile 2.5 GB / 2.2 GB text-only). Hosted: **$0.02 in / $0.10 out per 1M, cache read $0.0063** (Artificial Analysis, DeepInfra route, blended $0.04/1M) **versus $0.20 in / $0.20 out, cache read $0.10** (pricepertoken, single route via Fireworks/OpenRouter data, page dated 2026-10-14). That is **10× on input and 2× on output** for the same weights. getdeploying finds *no* hosted provider at all and suggests self-hosting a 1×RTX 2070 at ~$50/month. Both figures are recorded; neither is adopted as "the" price, and cost efficiency is held flat because of it.
- **Architecture:** dense, 4.5B effective / 8B with per-layer embeddings, 42 layers, ~150M vision embedder + ~300M audio embedder, 77M MTP drafter, Apache 2.0 with QAT. Third-party DGX Spark measurements put it at ~15 t/s BF16 (vs ~9.7 t/s for the 26B A4B MoE and ~3.3 t/s for the 31B dense) — i.e. the MoE paradox does not apply here.

### Raw benchmarks found

**Vendor rows** are the official Gemma 4 model card / Technical Report (arXiv 2607.02770), instruction-tuned, thinking mode. **Independent rows** are Artificial Analysis runs. **Aggregator-relayed** rows are marked as such.

⚠️ **Provenance caveat, load-bearing for every AA number below:** Artificial Analysis explicitly labels the Gemma 4 E4B Intelligence Index **"Estimate (independent evaluation forthcoming)"** — AA's own page states the score is estimated, not yet measured. The individual component rows quoted below are AA values relayed by BenchLM / graysoft.dev / cloudprice rather than read off AA's leaderboard directly. Treat them as independent-but-provisional.

Agent / tool use:

- **Tau2-bench (avg over airline / retail / telecom): 42.2% [vendor]** — airline 52.0, retail 67.1, telecom 18.4. Gemma 4 26B-A4B 68.2%; 31B 76.9%; Gemma 3 27B 16.2%.
- **τ²-bench (AA independent run): 20.8% [indep]** — versus the vendor's 42.2% on the same benchmark family. A ~21-point gap.
- **Terminal-Bench 2.1: 1.9% [indep]** (graysoft.dev relaying AA) — new and very low.
- Terminal-Bench Hard **8.0% [vendor]**; **8.3% [indep]** (AA) — the two agree closely.
- **AutomationBench-AA 0.5%** — ⚠️ **NOT VERIFIED.** AA's E4B page lists AutomationBench-AA as a component of the index but shows no published value; no reachable page carried 0.5%. Excluded from scoring.
- **Terminal-Bench 4.0 = 0.0%** — ⚠️ **NOT VERIFIED.** AA lists Terminal-Bench 4.0 as a component; the E4B comparison tables show no value. Excluded from scoring. (For contrast, AA's release-comparison table *does* show Gemma 4 31B at Terminal-Bench 4.0 **0.0%**.)
- **GDPval-AA: 0.0% normalized / 177 Elo** (BenchLM relaying AA) [indep]. ⚠️ **Conflicts with the lost-pass lead, which quoted −33 Elo.** The two cannot both be right on the same board revision; neither was confirmed on AA's own GDPval-AA page. Recorded as a conflict; the direction (near-floor) is the part that is consistent.
- IFEval **96.7% [vendor]**; IFBench **44.0% [vendor]** / **44.2% [indep]** — vendor and independent agree.
- AA Coding Index **9.4**; AA Intelligence Index **8.9 / 9** (estimated, see caveat above) [indep]
- Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found.**

Reasoning / knowledge:

- **HLE: 3.8% [indep]** — **the model's first-ever HLE figure.** Google's card leaves the E-tier HLE cell blank ("-") for both no-tools and with-search. First-measured, and very low.
- CritPt **0.6%** [indep] — near-floor.
- GPQA Diamond **58.6% [vendor]** / **57.6% [indep]** — vendor and independent agree within 1 point.
- MMLU Pro **69.4%**; MMMLU **76.6%**; BigBench Extra Hard (micro avg) **33.1%** [vendor]
- AIME 2026 (no tools) **42.5%** [vendor] (31B 89.2, 26B-A4B 88.3, 12B 77.5, E2B 37.5, Gemma 3 27B 20.8)
- AA-Omniscience Index **−19.7**; Accuracy **8.6%**; Hallucination Rate **30.9%** (BenchLM relaying AA) [indep]. The low hallucination rate is genuinely the best in the Gemma 4 line (vs 26B A4B's Omniscience index of **−51**). ⚠️ But note the internal tension: a *negative* Omniscience index paired with the *lowest* hallucination rate in the family is not the pattern seen on sibling models (Gemini 3.8 Flash: index 29.6 / hallucination 55.2%; GPT-5.4: index 5.8 / hallucination 91.7%). Flagged as a possible aggregator transcription error; not leaned on.
- AA-IFBench **44.2%** [indep] ≈ vendor 44.0.
- ARC-AGI-1 / BenchLM overall / Arena Elo: **no verified public score found** — E4B has no Arena row.

Coding:

- LiveCodeBench v6 **52.0% [vendor]**; Codeforces ELO **940** [vendor]
- AA-SciCode **24.4%** (BenchLM relaying AA) [indep] vs vendor **24.0%** — effectively identical. ⚠️ Note graysoft.dev shows AA-SciCode blank for E4B; 24.4% rests on the BenchLM relay alone.
- SWE-bench Verified / SWE-Pro / Vibe Code Bench / PostTrainBench: **no verified public score found.**

Long context:

- **AA-LCR v1.1: 32.0% [indep]** — and this is **above** the vendor's own MRCR v2 8-needle @128k figure of 25.4%. The independent harness is kinder than the vendor's.
- MRCR v2 8-needle @128k (average) **25.4% [vendor]**; RULER **95.2% @32k / 86.6% @128k**; LOFT Recall@k @128k **58.5%**; GraphWalks F1 <128k **50.9%**; MTOB eng→kgv @128k **37.8%** (Technical Report Table 9).
- Nothing is measured between 128K and the 128K ceiling — i.e. the whole window is measured, but only by needle/synthetic retrieval, not by multi-hop document reasoning at depth.

Vendor self-comparison still stands and is worth preserving: **E4B outperforms Gemma 3 27B non-thinking on every published row** (GPQA-D 58.6 vs 42.4, MMLU Pro 69.4 vs 67.6, MMMLU 76.6 vs 70.7, MMMU Pro 52.6 vs 49.7, BBEH 33.1 vs 19.3, MRCR 25.4 vs 13.5). The problem is not that it regressed; it is that the *independent* agentic numbers are far lower than the family's own generational story implies.

Vendor-table conflict found this pass: the Gemma 4 **Hugging Face / ai.google.dev model card** gives MMMU Pro for E4B as **52.6%** and OmniDocBench 1.5 as **0.181**, while the **arXiv Technical Report HTML (2607.02770v1)** vision table gives E4B **51.4%** and the 12B **67.7%** vs the card's **69.1%**. Same family, two published tables, small but real divergence. Recorded, not reconciled.

### Normalized scores (1–100)

- **Tool use: 38/100. CUT from 52 — the largest single move on this model.** The driver is that Google's own τ²-bench 42.2% and Artificial Analysis's independent τ²-bench **20.8%** disagree by ~21 points on the same benchmark family, and the stated method here is that **where vendor and independent disagree, the independent harness wins** — because Google's τ² harness configuration is unpublished and cannot be audited, whereas AA's is. Three further independent rows push the same direction: **Terminal-Bench 2.1 at 1.9%**, **GDPval-AA at 0.0% / 177 Elo**, and **AA Coding Index at 9.4**. The vendor Terminal-Bench Hard 8.0% / independent 8.3% agree and are low. What survives to hold this above the floor: genuine multi-step tool competence is real but shallow — retail τ² 67.1% — and IFEval 96.7% confirms instruction discipline. Explicitly **not** counted: the unverified Terminal-Bench 4.0 0.0% and AutomationBench-AA 0.5%.
- **Reasoning: 56/100. CUT from 58.** AA's independent runs broadly *confirm* the vendor on the knowledge evals — GPQA-D 57.6 vs 58.6, AA-IFBench 44.2 vs 44.0 — so the case for a bigger cut is weak. But two genuinely new first-measurement negatives arrived: **HLE 3.8%** (the model's first HLE ever; the vendor left the cell blank) and **CritPt 0.6%**. Both are near-floor on hard academic reasoning. Still positive: GPQA-D ~58%, MMLU Pro 69.4%, MMMLU 76.6%, BigBench Extra Hard 33.1% all clear Gemma 3 27B's non-thinking baseline. Still capped by AIME 2026 42.5% (roughly half the 12B's 77.5%) and BBEH 33.1%.
- **Context window: 80/100. RAISED from 78.** The raise rests on one specific fact: **AA-LCR 32.0% is above the vendor's own MRCR v2 8-needle @128k of 25.4%** — the independent harness measures this model's long-context retrieval *better* than the vendor does, which is the opposite of the pattern on Tool use and worth crediting. RULER 95.2% @32k and 86.6% @128k beat Gemma 3 27B at 128k (66.0). Held well short of the leaders because MRCR @128k is still only 25.4% and multi-hop retrieval degrades sharply (LOFT 58.5, GraphWalks 50.9, MTOB 37.8).
- **Multimodal: 78/100. HELD.** Unchanged for want of new evidence — which is itself notable, because this is the model's real strength and the dimension where it is most under-rated. **AA-MMMU-Pro 51.4%** [indep] lands within ~1 point of vendor MMMU Pro **52.6%** — independent confirmation of the vision number. Native **audio** (CoVoST 35.54 CorpusBLEU into English, FLEURS WER 0.08) and video input remain unique at this size and fit on a phone. Capped by MedXpertQA MM 28.7% and by vision trailing the 12B on every measure.
- **Coding: 52/100. HELD.** Deliberately unchanged. The confirmed rows all agree with the vendor (AA-SciCode 24.4 vs 24.0; Terminal-Bench Hard 8.3 vs 8.0; AA-IFBench 44.2 vs 44.0), and the one genuinely low new number, AA Coding Index **9.4**, is an *agentic* coding composite that measures the same terminal-agentic weakness already priced into Tool use — counting it twice would double-penalize one finding. LiveCodeBench v6 52.0% and Codeforces 940 are real but modest; it remains a completion-and-snippet model with no SWE-bench Verified of any kind.
- **Cost efficiency: 93/100. HELD.** Apache 2.0 weights with a 2.5 GB mobile build and 4.5 GB Q4_0 build put this among the cheapest genuinely multimodal models anywhere. **The $0.02/$0.10 (DeepInfra/AA) vs $0.20/$0.20 (Fireworks) conflict is a 10× input and 2× output spread on identical weights and is recorded, not resolved** — the score stays at the first pass's 93 rather than being moved up on the cheap route or down on the expensive one. Not 100 because self-hosting still needs hardware and every API route is metered.
- **Overall Score: 60.8/100. DOWN from 63.6.** (38 + 56 + 80 + 78 + 52) / 5 = 304 / 5 = **60.8**, cost excluded. The drop is entirely the Tool use cut: on the vendor's own table this is a Gemma-3-27B-class edge model, and on Artificial Analysis's independent agentic runs it is close to a non-agent. That gap is the finding. Best fit remains mobile/edge agents, on-device assistants and always-on local inference — and the honest framing of the tool-use number is that this model should be **prototype-tested before being trusted with real multi-step tool work**, which is the same advice Google's own updated guidance gives about the post-July-2026 E4B weights.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass)
- Method: Public internet research of the Google AI for Developers Gemma 4 model card, the `google/gemma-4-E4B` Hugging Face model card, Gemma 4 Technical Report arXiv 2607.02770 (Tables 5–9), Artificial Analysis (incl. the Intelligence Index v4.3.2 release-comparison tables), DeepInfra, Fireworks, Ollama, pricepertoken, getdeploying, cloudprice, BenchLM, graysoft.dev and LLMReference. Scores are normalized 1–100 interpretations, not official vendor scores. Vendor rows are labelled [vendor], independent rows [indep].
- What this pass changed vs. the first pass: (a) Tool use 52 → **38**, driven by AA's independent τ²-bench **20.8%** against Google's **42.2%** on the same benchmark family, plus Terminal-Bench 2.1 **1.9%**, GDPval-AA **0.0% / 177 Elo** and AA Coding Index **9.4**; (b) Reasoning 58 → **56** on the first-ever HLE figure, **3.8%**, and CritPt **0.6%**; (c) Context window 78 → **80** on **AA-LCR 32.0% sitting above the vendor's own MRCR @128k 25.4%**; (d) Multimodal, Coding and Cost all held; (e) the 10× pricing conflict ($0.02/$0.10 vs $0.20/$0.20) is now documented in full and deliberately left unresolved.
- Leads from the prior pass that did **not** verify: **Terminal-Bench 4.0 at 0.0%** and **AutomationBench-AA at 0.5%** — AA lists both as index components for E4B but publishes no value for either on any reachable page; both were excluded from scoring. **GDPval-AA at −33 Elo** — the only figure found was 0.0% / 177 Elo; recorded as an unresolved conflict. **Omniscience "least-confabulating in the family"** — the low 30.9% hallucination rate is BenchLM-relayed and sits in visible tension with the negative −19.7 index on the same relay, so it is recorded but not scored.
- Provenance caveat: Artificial Analysis marks the Gemma 4 E4B Intelligence Index **"Estimate (independent evaluation forthcoming)"**. Every AA number above is either read off an AA comparison table or relayed by a third party; none is a confirmed AA leaderboard reading for this model.
- Conflicts recorded, not averaged: τ²-bench 42.2% [vendor] vs 20.8% [indep]; GDPval-AA 177 Elo vs the previously quoted −33; E4B hosting at $0.02/$0.10 vs $0.20/$0.20; MMMU Pro 52.6 (model card) vs 51.4 (Technical Report HTML); AA-SciCode 24.4 (BenchLM) vs blank (graysoft.dev); CloudPrice's text-only capability table, which contradicts Google's model card and is discarded.
- **Re-run when:** (1) when Artificial Analysis replaces the E4B "estimate" with a measured run — specifically Terminal-Bench 4.0 and AutomationBench-AA, the two rows that would confirm or refute the Tool use cut; (2) when a named publisher resolves the hosted price (is the cheap route DeepInfra's $0.02/$0.10 or is Fireworks' $0.20/$0.20 the only buyable offer?), which would justify moving Cost efficiency in either direction; (3) when Google fills the E-tier HLE cell on the official model card, to compare against AA's 3.8%; (4) when a SWE-bench Verified or PostTrainBench run appears, since Coding currently rests on completion benchmarks only; (5) when a multi-hop long-context result above 128K-needle-retrieval appears.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.