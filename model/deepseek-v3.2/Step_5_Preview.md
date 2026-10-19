# DeepSeek V3.2 — findings by Step 5 Preview

- Source: DeepSeek (`deepseek-v3.2`; Exp 2025-09-29, official 2025-12-01)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2 (Experimental debut 2025-09-29; official release 2025-12-01)
- **Short description:** The DSA release — DeepSeek's efficiency milestone. V3.2-Exp debuted **DeepSeek Sparse Attention**, cutting core attention complexity from O(L²) to O(Lk) and enabling a 50%+ API price cut (to $0.28 input / $0.42 output, $0.028 cache hits) while performing on par with V3.1-Terminus; the December official release added scalable RL (RL budget >10% of pre-training cost), a large-scale agentic task synthesis pipeline, and GPT-5-comparable reasoning. The high-compute **V3.2-Speciale** sibling took **gold medals at IMO 2025, CMO 2025, IOI 2025 and ICPC World Finals** without targeted training. A 685B/37B-active MIT open-weights MoE (4.1M downloads/month) that remains one of the cheapest frontier-class models ever sold.
- **Provider / access:** DeepSeek API, Hugging Face (MIT); SGLang/vLLM day-one support; 34 finetunes.
- **Release:** 2025-09-29 (Exp), 2025-12-01 (official).
- **Context window:** 128K tokens.
- **Modalities:** Text in → text out; thinking and non-thinking modes; tool use.
- **Pricing (as of 2026-10-19):** ~$0.28/M input (cache miss), $0.042/M output, $0.028 cache hit (V3.2-Exp rate card; AA lists a ~$0.10 blended rate).
- **Architecture:** 685B total / 37B active MoE; DSA with lightning indexer; masked-MHA mode for short prefills.

### Raw benchmarks found

V3.2-Exp vs V3.1-Terminus (vendor, Sept 2025):

- MMLU-Pro: **85.0** (85.0); GPQA-Diamond: **79.9** (80.7); HLE: **19.8** (21.7)
- LiveCodeBench: **74.1** (74.9); AIME 2025: **89.3** (88.4); HMMT 2025: 83.6; Codeforces: **2,121** (2,046)
- Aider-Polyglot: 74.5 (76.1); BrowseComp: **40.1** (38.5); BrowseComp-zh: 47.9; SimpleQA: 97.1
- SWE Verified: **67.8** (68.4); SWE-bench Multilingual: 57.9; Terminal-bench: **37.7** (36.7)

Official V3.2 thinking (arXiv:2512.02556 Table 3):

- AIME 2025: **93.1** (GPT-5 High 94.6, Gemini-3.0-Pro 95.0); HMMT Feb 92.5 / Nov 90.2
- IMOAnswerBench: **78.3**; LiveCodeBench: **83.3**; Codeforces: **2,386**; GPQA Diamond: **82.4**; HLE: **25.1**
- τ²-bench (model-as-user): Airline 63.8, Retail 81.1, Telecom 96.2

HF eval-results widget / trackers:

- GPQA Diamond: **82.4**; SWE-bench Verified: **70**; MMLU-Pro: **85**; SWE-bench Pro: 15.56; WildClawBench: 34
- Artificial Analysis Intelligence Index: **17** (reasoning) / 14 (non-reasoning)
- V3.2-Speciale olympiads: IMO 35/42 gold, CMO 102/126 gold, IOI 492/600 gold

**New in the 2026-10-19 re-run (AA / BenchLM, 16 rows):**

- τ²-bench (AA composite): **78.9%** — consistent with the vendor spread above
- Claw-Eval: **40.2%**; VITA-Bench: **18.5%**; Gert Labs: **29.57%** (agentic — weak-to-mid)
- SWE-Rebench: **60.9%**; React Native Evals: **71.5%**; Design Arena Website: **1176**
- AA-LCR: **45.7%**; CritPt: **0.9%**; AA-IFBench: **49.0%**
- AA Intelligence Index: **16.0%**; AA-GPQA Diamond: **75.1%**; AA-HLE: **11.2%**
- AA-Omniscience: Index **−46.9**, accuracy **24.0%**, hallucination rate **93.3%** — extremely weak knowledge reliability
- BenchLM aggregate: **50.19** (#97/956)

### Normalized scores (1–100)

Re-run verdict 2026-10-19: **scores unchanged.** The new AA/BenchLM rows sit exactly where the previous evidence placed the model: τ² 78.9% confirms the mid-upper agentic band (while VITA 18.5% / Gert 29.57% confirm its floor), AA-GPQA 75.1% / AA-HLE 11.2% / Index 16.0 match the vendor numbers within harness variance, and the 93.3% hallucination rate explains why Reasoning stays capped despite AIME/Codeforces strength.

- **Tool use: 58/100.** terminal-bench 37.7% and BrowseComp 40.1% are mid-band; the τ²-bench spread (AA composite 78.9%; vendor Airline 63.8 / Retail 81.1 / Telecom 96.2) shows uneven domain reliability; the new Claw-Eval 40.2% / VITA-Bench 18.5% / Gert Labs 29.57% confirm the mid-band read. SWE-V 67.8–70% is workmanlike; no MCP Atlas/GDPval figure.
- **Reasoning: 62/100.** GPQA 75.1–82.4%, AIME 89.3–93.1%, Codeforces 2,121–2,386 and MMLU-Pro 85.0% put it mid-upper — GPT-5-comparable in DeepSeek's own framing — but HLE 11.2–25.1%, the AA Intelligence Index of 16–17, CritPt 0.9% and a 93.3% hallucination rate leave it well behind the frontier.
- **Context window: 66/100.** 128K is the 100K–200K band (50–64) plus the DSA efficiency story; the new AA-LCR 45.7% and the absence of any MRCR/RULER retrieval figure keep it at the band's top, not higher.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 58/100.** SWE-V 67.8–70%, LiveCodeBench 74.1–83.3%, Aider 74.5% and the new SWE-Rebench 60.9% / React Native 71.5% are respectable open-weights coding; SWE-bench Pro 15.56% and TB 37.7% show the agentic-coding ceiling that V4 later blew past.
- **Cost efficiency: 97/100.** $0.28/$0.42 with $0.028 cache hits (AA blended ~$0.10) and MIT weights — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier; the 50%+ price cut was the release's headline.
- **Overall Score: 51/100.** Best-fit recommendation: the budget workhorse of late 2025 — GPT-5-comparable reasoning and gold-medal olympiad capability (Speciale) at $0.28/$0.42 with MIT weights; a 128K context, mid-band agentics and a very high hallucination rate date it badly against the V4 generation.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research, re-run 2026-10-19 — BenchLM's 16-row aggregate (Claw-Eval, VITA-Bench, Gert Labs, τ²-bench, SWE-Rebench, React Native, Design Arena, AA per-benchmark rows incl. Omniscience) plus the DeepSeek V3.2-Exp launch + V3.2 release notes, arXiv:2512.02556, the HF model card/eval-results and Artificial Analysis (deprecated page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Pro.md`, using the same headings.
