# Grok 4.1 — findings by Claude Opus 5

- Source: xAI / SpaceXAI (`grok-4.1`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** A **personality and preference release**, not a capability release — and xAI is explicit about that. Grok 4.1 took the same large-scale RL infrastructure that produced Grok 4 and pointed it at "style, personality, helpfulness, and alignment" instead of verifiable tasks, using **frontier agentic reasoning models as reward models** to evaluate non-verifiable signals at scale. The claimed result is a model "exceptionally capable in creative, emotional, and collaborative interactions … more perceptive to nuanced intent, compelling to speak with, and coherent in personality" ([xAI, 2025-11-17](https://x.ai/news/grok-4-1)). It ships in both thinking and non-thinking modes from one release. **It is a consumer model**: the API sibling is the separately-tracked Grok 4.1 Fast.
- **Provider / access:** grok.com, X, and the Grok iOS/Android apps — rolled out in **Auto mode** and selectable as "Grok 4.1" in the model picker. **No API route found:** `docs.x.ai/developers/models/grok-4.1` returns **404** (while `grok-4.20` and `grok-4.20-multi-agent` resolve), and Grok 4.1 is **absent from xAI's published price list**, which does carry `Grok 4.1 Fast` at $0.20/$0.50 with a 2M window ([BenchLM Grok API pricing](https://benchlm.ai/xai/api-pricing)). This repo records the local route `opencode/grok-4.1`; OpenCode Zen's catalogue lists Grok 4.5/4.6/4.7 and Build 0.1, not 4.1.
- **Release / knowledge:** Released **2025-11-17**, following a **silent rollout from 2025-11-01 to 2025-11-14** in which preliminary builds were served to a progressively larger share of live production traffic on grok.com, X and mobile, under continuous blind pairwise evaluation. Knowledge cutoff: no verified public date found.
- **IDs:** `grok-4.1` (consumer model picker). LMArena submission code names: **`quasarflux`** (Grok 4.1 Thinking) and **`tensor`** (Grok 4.1 non-reasoning). **Free to all users** on grok.com and the apps — but there is no free *or paid* developer ID that I could verify.
- **Context window:** **1,000,000 tokens** per [BenchLM](https://benchlm.ai/models/grok-4-1). **Caveat that matters:** xAI's launch post does not state a context window at all, the developer docs page is gone, and a consumer chat product does not expose one — so this figure is **aggregator-only and unconfirmed by the vendor**. Max output: no verified public figure found.
- **Modalities:** **No modality statement exists for Grok 4.1 specifically.** The launch post discusses only text interaction; it contains no mention of image, audio or video input, and there is no multimodal benchmark for this model anywhere. By family inheritance Grok 4 was text + image in → text out, and Grok 4.1 is presumably the same, but I am recording that as an inference rather than a finding. Reasoning: **yes — both a thinking and a non-thinking mode**, submitted to LMArena as separate entries. Tool calls: web search demonstrably available (xAI's hallucination evaluation was run on "non-reasoning model with web search tools").
- **Pricing (as of 2026-10-08):** **No published price — free to all users** on grok.com, X and the mobile apps. xAI states it is "now available to all users", with no subscription gate mentioned, which is a change from Grok 4's SuperGrok/Premium+ gating. There is no API rate because there appears to be no API.
- **Architecture:** Proprietary, closed weights. Parameters undisclosed. The one methodological disclosure is genuinely interesting and specific: to optimise non-verifiable reward signals (style, personality, helpfulness), xAI "developed new methods that let us use frontier agentic reasoning models as reward models to autonomously evaluate and iterate on responses at scale."

### Raw benchmarks found

> **This is the thinnest hard-number record of any scored model in this research pass, and the reason is structural rather than a gap in my searching.** xAI's launch post presents EQ-Bench3, Creative Writing v3, hallucination rate and FActScore **as charts with no extractable values**, and states openly that for EQ-Bench3 and Creative Writing v3 it is still "working with the author(s) to get the number on the leaderboard" — i.e. the figures were not yet third-party verified at publication. BenchLM carries exactly **one** benchmark row for this model. I have not estimated anything off a graph.

Agent / tool use:

- ResearchClawBench: **13.5%** ([ResearchClawBench leaderboard](https://internscience.github.io/ResearchClawBench-Home/)) — the **only** independent agentic measurement that exists
- **Terminal-Bench (any version), τ²/τ³-bench, OSWorld, GDPval-AA, MCP-Atlas, Toolathlon, BrowseComp, Claw-Eval: no verified public score found**
- Web search tooling is confirmed to exist (used in xAI's own hallucination evaluation), but is unmeasured

Reasoning / knowledge:

- **LMArena Text Arena (blind human preference, Style Control Elo):** Grok 4.1 Thinking (`quasarflux`) **#1 overall at 1483 Elo**, described by xAI as "a commanding margin of 31 points over the highest non-xAI model"; Grok 4.1 non-reasoning (`tensor`) **#2 at 1465 Elo**, which xAI notes "surpasses every other model's full-reasoning configuration on the public leaderboard". For scale, **Grok 4 ranked #33**.
- **Blind pairwise production preference: 64.78%** over the previous production model, measured on live traffic during the two-week silent rollout
- EQ-Bench3 (45 roleplay scenarios, 3 turns, LLM-judged with Claude Sonnet 3.7 as the prescribed judge, default sampling, no system prompt, rubric + normalized Elo): **chart only — no extractable value**
- Creative Writing v3 (32 prompts × 3 iterations, rubric + normalized Elo): **chart only — no extractable value**
- **GPQA Diamond, HLE, MMLU-Pro, AIME, CritPt, AA-LCR, Artificial Analysis Intelligence Index, AA-IFBench, FrontierMath: no verified public score found.** Artificial Analysis has no entry for this model, and BenchLM assigns it **no overall score at all** (unranked, 1 of 625 benchmarks).
- Hallucination rate and **FActScore** (500 biography questions; xAI defines its hallucination metric as the macro-average percentage of atomic claims containing major or minor errors, measured on a stratified sample of real production information-seeking queries, non-reasoning mode with web search): **both charts only — no extractable values.** A reduction is claimed; its size is not published in extractable form.

Coding:

- **Nothing. No SWE-bench, no LiveCodeBench, no Terminal-Bench, no SciCode, no FrontierCode, no agentic-coding harness, and no vendor claim of coding improvement.** The launch post does not discuss coding at all. This is the complete and accurate state of the public record.

Multimodal:

- **No benchmark and no vendor modality statement.** No MMMU, no chart/document/OCR, no video, no audio, no GUI grounding.

Long context:

- **No MRCR, RULER, LongBench, AA-LCR or needle-retrieval number at any depth**, and no vendor confirmation of the window size itself.

### Normalized scores (1–100)

- **Tool use: 45/100.** One number exists — **ResearchClawBench 13.5%** — and it is poor. Web search is confirmed present (xAI ran its hallucination eval through it) but entirely unmeasured, and the whole modern agentic battery is absent. I will not credit a dimension on the basis that a consumer chat product obviously calls tools; the measurement is 13.5% and nothing contradicts it.
- **Reasoning: 64/100.** The LMArena result is real evidence and should not be dismissed: **#1 overall at 1483 Elo with a 31-point margin over the best non-xAI model**, and a non-thinking mode at #2 that beats every rival's *full-reasoning* configuration — all blind, external, human-judged, and a jump from Grok 4's #33. The **64.78% blind pairwise win rate on live production traffic** independently supports it. But LMArena measures *preference*, not capability, and there is **no GPQA, HLE, MMLU-Pro, AIME, CritPt or aggregate index of any kind** to tell me whether the model actually knows more. A model can be the most pleasant interlocutor on the leaderboard and still be mid-tier at hard reasoning; with zero knowledge benchmarks I cannot distinguish those cases, so the score sits in the mid-60s rather than where the Elo alone would put it.
- **Context window: 76/100.** Scored on an **aggregator-only** 1M figure that the vendor never stated, on a model whose developer docs page has been removed, with **zero** retrieval validation at any depth. The raw number would justify high-80s; the complete absence of vendor confirmation or measurement does not, and I would rather under-credit an unverified spec than quote it as fact.
- **Multimodal: 50/100.** Scored almost entirely on family inheritance, which I am flagging rather than hiding: Grok 4 accepted text and images, and Grok 4.1 presumably does too — but **xAI's launch post never says so**, and there is not a single multimodal benchmark for this model. 50 reflects "probably has image input, quality completely unmeasured, no audio or video anywhere in the family's text models". If evidence appears that 4.1 is text-only, this should drop sharply.
- **Coding: 48/100.** There is **no coding evidence of any kind** — not a benchmark, not a vendor claim, not a partner testimonial. xAI's own launch material is about emotional intelligence, creative writing and hallucination reduction, and says nothing about code. Scored just below the midpoint because it is a general frontier-lineage model that certainly writes code to some standard, and because the LMArena arena includes coding-adjacent prompts — but a dimension with zero measurements cannot be scored as a strength, and I am not going to borrow Grok 4's or Grok 4.20's numbers to fill the gap.
- **Cost efficiency: 80/100.** **Free to all users** on grok.com, X and the mobile apps, with no subscription gate mentioned — a genuine improvement on Grok 4, which was gated behind SuperGrok and Premium+. For a model holding #1 on LMArena's text leaderboard, free consumer access is outstanding value. Docked 20 points for the thing that matters most in this dataset's context: **there is no API at all** — the docs page 404s and it is absent from xAI's price list — so the model cannot be built on, automated, or integrated. Free is only worth so much if it is only reachable through a chat window.
- **Overall Score: 56.6/100.** Mean of the five non-cost dims (45 + 64 + 76 + 50 + 48) / 5 = 56.6. Best fit: conversational, emotional and creative work in a chat interface, free, where response *quality as judged by humans* is the objective — and on that narrow criterion it was, at release, the best-rated model in the world. The score is low because this dataset measures five capability dimensions and xAI published evidence for roughly one of them: **a #1 LMArena placement sitting on top of no coding benchmark, no knowledge benchmark, no multimodal benchmark, no retrieval benchmark, one 13.5% agentic score, and four headline claims that exist only as unlabelled charts.** That is a finding about the public record, not a verdict on the model's ceiling.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — xAI's own Grok 4.1 launch post (release date, consumer availability, the silent-rollout design and 64.78% blind pairwise preference figure, the LMArena placements and code names, the reward-modelling methodology, and the stated-but-unquantified EQ-Bench3 / Creative Writing v3 / hallucination / FActScore results together with their harness details), BenchLM's aggregated page and Grok API pricing table, and the ResearchClawBench leaderboard. `docs.x.ai/developers/models/grok-4.1` was requested and returned **404** while sibling model pages resolve, which is reported as evidence that no live API route exists. Every xAI figure published only as an unlabelled chart was deliberately **not** estimated, and no benchmark was borrowed from Grok 4, Grok 4.1 Fast or Grok 4.20 to fill an empty dimension — the multimodal score is explicitly flagged as resting on family inference rather than evidence, and the 1M context figure is flagged as aggregator-only. Artificial Analysis has no entry for this model. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
