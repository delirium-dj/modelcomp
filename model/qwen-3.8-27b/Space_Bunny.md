# Qwen 3.8 27B — findings by Space Bunny

- Source: Alibaba Qwen / Qwen3.8-27B
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-05 (Overall 89.6).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's open-weight dense vision-language reasoning model for coding, professional work, multimodal interaction, and long-running agent tasks.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B` (Apache 2.0, released 2026-08-14); Alibaba Cloud Model Studio / Qwen Cloud route `qwen3.8-27b` (OpenAI-compatible Chat Completions, `enable_thinking`, built-in tools, 1M context); OpenRouter `qwen/qwen3.8-27b`; NVIDIA NIM, Microsoft Foundry, Groq (preview), DeepInfra, Cerebras, Novita, OVHcloud, Nebius, Vercel AI Gateway; local vLLM / SGLang.
- **Release / knowledge:** 2026-08-14 weights; no verified exact knowledge cutoff published.
- **IDs:** `Qwen/Qwen3.8-27B`; `qwen3.8-27b` (Alibaba/Qwen Cloud); OpenRouter `qwen/qwen3.8-27b` (dated slug `qwen3.8-27b-20260814`).
- **Context window:** Official weights 262,144 native, extensible to 1,000,000 (card documents RoPE/YaRN). Hosted limits are route-dependent and this is now a material caveat: **Alibaba Model Studio / Qwen Cloud serves 1,000,000** (max input 991,808; max input in thinking mode 983,616; max output 131,072; max reasoning 262,144); **OpenRouter serves 1,000,000** and raised max output from 131,072 to 235,929 on 2026-10-11; **Groq preview serves only 131,072 with 16,384 max output**; DeepInfra 262,144; Artificial Analysis records the model at 256k–260k. Max-output note: 131K–236K hosted, 262K on self-host.
- **Modalities:** Text, image, video in (PDF via Alibaba `pdf_parsing` built-in tool on the hosted route); text out; flexible thinking on by default with `low`/`medium`/`xhigh` reasoning effort and `preserve_thinking`; tool calling and structured outputs.
- **Pricing (as of 2026-10-17):** **Sources disagree** — Alibaba Cloud Model Studio pricing doc lists `qwen3.8-27b` at **$0.424 in / $1.696 out per 1M (Global, 0<Token≤1M)**; anotherwrapper (2026-10-16, citing the same doc) lists **$0.45/$3.20**; QwenCloud's own model page lists **$0.50 in / $3.00 out** with cache read $0.05, explicit cache creation $0.625, explicit read $0.05; Artificial Analysis benchmarks the **Alibaba API at $0.50/$3.00** with an 80% cache discount ($1.01 per Intelligence Index task). I prefer the official Model Studio row ($0.424/$1.696) but note the doc/route divergence rather than picking silently. Third-party routes are cheaper still: **OpenRouter cut its resale price on 2026-10-11 from $0.425→$0.040 input (−90.6%), $2.55→$2.30 output, cache read $0.085→$0.0198** (no published end date for that level); DeepInfra runs a **25% promotional discount** ($0.15 in / $1.875 out at Flex tier, no published end date); Cerebras $0.99/$1.49; Novita $0.42/$3.00; Nebius $0.45/$3.00. Self-hosting is Apache 2.0, no vendor token price.
- **Architecture:** Open-weight 27B dense vision-language model, 64 layers, hidden 5,120, hybrid Gated DeltaNet (16 groups × 3) + Gated Attention, MTP, 248,320 padded token embedding.

### Raw benchmarks found

> Vendor-reported rows are labelled **vendor**; rows measured by a third party are labelled with that party. Several aggregator pages simply re-label the vendor's own table — those are called out explicitly below, because the first pass treated some of them as independent.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (**vendor**, official Qwen model card). **Conflict:** BenchmarkList and Artificial Analysis carry an AA-measured Terminal-Bench 2.1 of **0.8%** for this exact ID (rank 28/182, 85th pct) — roughly two orders of magnitude apart. DataLearner lists "TB2.1 73, rank 39/57" alongside DataLearner's own vendor row for TB4.0, i.e. that 73.0 is the vendor number mirrored, not an independent rerun. I prefer the AA number for scoring (independent harness) and keep 73.0 on record as the vendor claim.
- Terminal-Bench 4.0: **2.5% (low effort) / 5.1% (medium) / 5.6% (xhigh)** (DataLearner/AA, harness "Thinking Level · Tools", ranks 73/65/64 of 96) — unchanged from the first pass and still near-floor.
- SWE-bench Pro: **61.7%** (**vendor**, Claude Code harness, temp 1.0, top_p 0.95, 256K context).
- AA Tau3-Banking: **48.0%, rank 5 of 174** (Artificial Analysis Tau3-Banking leaderboard, last updated 2026-10-16) — independent and high-percentile; unchanged from the first pass.
- GDPval-AA: **1543 Elo** (BenchmarkList/AA, rank 22 of 340, 94th pct) — **up from the 1423 Elo recorded on the first pass**; the 1423 figure was the pre-`v2.1` AA number.
- AA Agentic Index: **45.8** (OpenRouter/AA metadata, 2026-10-11) — down marginally from 46.5 on 2026-09-20; BenchmarkList separately lists WildClawBench **48.0%** (#18/36) and Toolathlon **67.1%** (#17/37).
- Toolathlon Verified: **67.1%**; CoWorkBench **70.7%**; JobBench **33.4%**; Agents' Last Exam **20.4% Pass@1 / 42.9 score**; IFBench **79.5%** (all **vendor**).
- AA AutomationBench-AA: **48.2%**; AA EnterpriseOps-Gym-AA **44.2%**; AA-Briefcase and GDP.pdf also present in the AA v4.3.2 composite (first pass carried 48.2% / 44.2% / 1397 Elo / 16.6%).
- Terminal-Bench 2.1 (Vals AI): **58.4%** (BenchLM comparison table, 2026-10-16) — a third harness value, between the vendor 73.0% and AA 0.8%; recorded rather than reconciled.
- Tau2/Tau3-Retail, Claw-Eval, MCP-Atlas, SWE Atlas Codebase QnA: **no verified public exact value found** for this ID.

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (**vendor**); Vals AI independent run **88.9%**; AA-GPQA-Diamond **90.5%** — three-way agreement within ~1.6 pp.
- HLE: **30.8%** (**vendor**) vs **33.9%** (AA, rank 48/466, 90th pct).
- CritPt: **5.4% at xhigh / 0.3% in standard mode** (DataLearner/AA, ranks 96 and 186 of 204) — a serious frontier-science weakness and the main cap on this dimension.
- **Artificial Analysis Intelligence Index: 34** (AA model page, v4.3.2, #1 of 141 in its open-weight small class) — essentially unchanged from the first pass's 33.7 (v4.1.1). *Conflict:* BenchmarkList and a third-party audit page report **52** (rank 28/418) for the same ID. AA's live page says 34; the 52 figures track an older index composition. Prefer 34. The index itself was re-based between passes (v4.3.2 swaps Terminal-Bench 2.1 for Terminal-Bench 4.0 and adds AutomationBench-AA), so 33.7 vs 34 is not a like-for-like comparison.
- AA-Omniscience Index: **−10.0%**; Accuracy **15.6%**; Hallucination Rate **30.3%** — unchanged; negative index = worse than random guessing on this probe.

Coding:

- SWE-bench Verified: **79.0%** (**vendor**, in-house `QwenSWEBench`, avg@3, 8h timeout, 32,768 max tokens, 256K context). Note this is a Qwen-run harness, not the public SWE-bench Verified leaderboard.
- LiveCodeBench v6: **90.3%** (**vendor**, #7 of 125 on DataLearner).
- SWE-bench Pro 61.7%; Terminal-Bench 2.1 73.0% (both **vendor**).
- SWE-bench Multilingual: **73.8%** (**vendor**, mini-SWE-agent harness).
- DeepSWE 42.2%; NL2Repo-Bench 42.3% (**vendor**).
- SciCode: **44.7%** (AA/BenchmarkList, rank 64/458) — **down from the 46.6%** carried on the first pass; current.
- IOI (Vals v2): **39.06%**, xhigh + tools, rank 24/26 (DataLearner) — new this pass.
- AA Coding Index: **68.1** (OpenRouter metadata 2026-10-07, corroborated by AA).
- Vals AI: LiveCodeBench 84.0%; SWE-bench 86.0%. llm-bench.io community local-run aggregates (30 runs, 12 GPUs): coding 52.0/100, agentic 81.4/100 — a self-hosted sanity signal, not a leaderboard.

Long context:

- **Context Arena: 93.98%, rank 7 of 126** (DataLearner) — new independent long-context retrieval result this pass, and the strongest measured evidence that the 1M hosted window is actually usable.
- AA-LCR: **82.0%** (rank 28 on the LCR board) — unchanged from the first pass.
- Advertised vs served: 1M on Alibaba/Qwen Cloud and OpenRouter; 131,072 on Groq; 256k–260k on Artificial Analysis; 262,144 native on the weights. **No measured retrieval score at the full 1M length exists.**
- No exact-model RULER, MRCR, or GraphWalks row found.

Multimodal:

- OSWorld-Verified **84.3%** (#5/61); WebArena-Verified **64.8%**; AndroidWorld **81.9%** (all **vendor**).
- ClawEval-MM **57.4% Pass@3 / 56.9 avg**; RecreationBench 47.1%; Vision2Web 62.9% (all **vendor**).
- OmniDocBench v1.5 91.1%; RealWorldQA 85.9% (#3/30); ERQA 65.5%; MathVision 94.6% with CI (90.0% without); CharXiv (RQ) 90.2% with CI (83.7% without) (all **vendor**).
- AA-MMMU-Pro: **76.3%** (independent, unchanged).
- AI WebDev Arena: **1597.46, rank 13/105** (arena, third-party Elo) — new this pass; Vision2Web and BabyVision (65.7%; 85.6% with Python) remain vendor-reported.

### Normalized scores (1–100)

- **Tool use: 82/100.** Unchanged. The genuinely new agentic evidence is two-sided: GDPval-AA rose 1423 → **1543 Elo** and Tau3-Banking holds at **48.0% (#5/174)** with Toolathlon 67.1% — solidly upper-mid. Against that, the AA-measured **Terminal-Bench 2.1 of 0.8%** (versus the vendor card's 73.0%) is the single most damaging fact found in either pass, and **TB4.0 stays at 2.5–5.6%** across all three effort levels. The cap is not the missing numbers, it is that a 27B model which tops vendor tables at 73.0% collapses on every third-party terminal harness. Still no Tau2, Claw-Eval or MCP-Atlas row.
- **Reasoning: 84/100.** Unchanged. GPQA Diamond is stable across three harnesses (89.2 / 88.9 / 90.5) and AA-HLE 33.9% beats the vendor 30.8%, so the knowledge profile is genuinely strong. It is held down by **CritPt 5.4% (xhigh) / 0.3% (standard)**, **Omniscience −10.0%** with 15.6% accuracy, and an AA Intelligence Index of 34 that did not move despite the richer set of vendor numbers now on the table. The index-value conflict (34 vs the 52 circulating on aggregators) is an index-composition artefact, not evidence of a 18-point swing, and is not used to move the score.
- **Context window: 98/100.** Unchanged, and now better evidenced rather than better changed: the 1M hosted window is confirmed on two first-party routes (Alibaba 991,808 max input / 131,072 max output; OpenRouter 1M / 235,929 max output) and **Context Arena 93.98% (#7/126)** is a new independent retrieval result at scale. It stays at 98, not 100, because retrieval was never measured at the full 1M length, Groq serves only 131,072, and AA records the model at 256k.
- **Multimodal: 91/100.** Unchanged. Native image/video input, a broad exact-model vendor set (MathVision 94.6% with CI, CharXiv 90.2%, OmniDocBench 91.1%, RealWorldQA 85.9%), independently corroborated by AA-MMMU-Pro 76.3% and now a WebDev Arena Elo of 1597 (#13/105). No audio input and no non-text output path, per the official capabilities tables.
- **Coding: 93/100.** Unchanged. SWE-bench Verified 79.0% (vendor harness), SWE-bench Pro 61.7%, SWE-bench Multilingual 73.8%, LiveCodeBench v6 90.3%, Terminal-Bench 2.1 73.0% (vendor) plus independent SciCode 44.7%, AA Coding Index 68.1 and Vals LiveCodeBench 84.0%. DeepSWE 42.2%, NL2Repo 42.3% and the **SciCode revision 46.6% → 44.7%** keep it off the very top.
- **Cost efficiency: 90/100.** **Raised from 86.** The first pass scored a stale OpenRouter list price of $0.42/$3.00. Since then the official Model Studio doc row is **$0.424 in / $1.696 out** for ≤1M tokens, OpenRouter's resale price fell **90.6% on input to $0.040** (with $2.30 out) on 2026-10-11, DeepInfra runs a 25%-off promotion to $0.15/$1.875, and Cerebras lists $0.99/$1.49. Artificial Analysis still benchmarks the Alibaba first-party API at the higher $0.50/$3.00, which is why this is 90 and not 95: the official price sources do not agree, the two deep discounts carry no published end date, and the model's own measured cost is $1.01 per Intelligence Index task. Excluded from Overall regardless.
- **Overall Score: 89.6/100.** (82 + 84 + 98 + 91 + 93) / 5 = 448 / 5 = 89.6, cost excluded. Unchanged from the first pass: the new GDPval-AA Elo, Tau3 rank, Context Arena row and big price cuts are offset by the newly visible AA Terminal-Bench 2.1 of 0.8% and the flat 34 Intelligence Index. Best fit remains visual computer use, software engineering and million-token professional workflows on a cheap hosted or self-hosted route — with the caveat that terminal-agent reliability is much weaker than the vendor tables suggest.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass)
- Method: public internet research. **6 independent searches** (2 × `deep`, 4 targeted) plus direct page fetches of Artificial Analysis, Hugging Face, Alibaba Cloud Model Studio and QwenCloud pricing pages; scores are normalized 1–100 interpretations, not official vendor scores.
- **New sources used this pass:** [Alibaba Cloud Model Studio model pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing) · [qwen3.8-27b model page (QwenCloud)](https://www.qwencloud.com/models/qwen3.8-27b) · [Alibaba Cloud Model inference pricing (console)](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-pricing) · [Artificial Analysis — Qwen3.8 27B (xhigh)](https://artificialanalysis.ai/models/qwen3-8-27b) · [BenchmarkList — Qwen3.8-27B](https://benchmarklist.com/models/qwen-qwen3.8-27b/) · [BenchLM — AA Tau3-Banking leaderboard (upd. 2026-10-16)](https://benchlm.ai/benchmarks/aatau3banking) · [BenchLM — Qwen3.8-27B vs Qwen3.8-Flash-Next](https://benchlm.ai/compare/qwen3-8-27b-vs-qwen3-8-flash-next) · [DataLearner — Qwen3.8-27B benchmark analysis](https://www.datalearner.com/en/ai-models/pretrained-models/qwen3-8-27b/analysis) · [Groq — Qwen 3.8 27B (131K preview route)](https://console.groq.com/docs/model/qwen/qwen3.8-27b) · [DeepInfra — Qwen/Qwen3.8-27B](https://deepinfra.com/Qwen/Qwen3.8-27B) · [bertrande — OpenRouter price history](https://bertrande.com/en/ai/openrouter/qwen--qwen3.8-27b/) · [CloudPrice — Qwen3.8 27B specs/pricing](https://cloudprice.net/models/alibaba-qwen3-8-27b) · [llm-bench.io — local run aggregates](https://llm-bench.io/models/qwen/qwen3.8-27b)
- Conflicts recorded rather than smoothed: vendor Terminal-Bench 2.1 73.0% vs AA 0.8% vs Vals 58.4%; Intelligence Index 34 (AA live) vs 52 (aggregators); official price $0.424/$1.696 vs $0.45/$3.20 vs $0.50/$3.00; SciCode 46.6% (first pass) vs 44.7% (current); GDPval-AA 1423 → 1543 Elo across AA index revisions.
- **Still unmeasured for this exact ID:** SWE-bench Verified on the public leaderboard (the 79.0% is a Qwen in-house harness), Tau2/Tau3-Retail, Claw-Eval, MCP-Atlas, RULER/MRCR at 1M, any retrieval benchmark at the full hosted 1M length.
- **Re-run when:** Alibaba publishes a `qwen3.8-27b` price change or a dated end to the OpenRouter/DeepInfra discounts (check the Model Studio pricing doc and OpenRouter's price list) · Artificial Analysis re-releases Qwen3.8-27B under Intelligence Index v5 or publishes a Terminal-Bench 4.0 row for a non-xhigh effort · a public SWE-bench Verified leaderboard row appears · Groq's preview route moves off 131,072 context · Qwen ships a Qwen3.9 27B-class successor.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_27B.md`, using the same headings.