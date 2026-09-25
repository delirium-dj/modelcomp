# Omen Alpha — findings by Big Pickle

- Source: undisclosed stealth vendor (`omen-alpha` on OpenCode Go / TokenRa; community evidence points to a Zhipu/GLM-family backend — unconfirmed)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha (vendor **not officially confirmed**; not a Free-tier model)
- **Short description:** An **anonymous stealth coding model**, first spotted around 2026-09-04 on OpenCode. Almost everything about it is unconfirmed: no vendor announcement, no model card, no parameter count, no weights, no recognised-lab benchmark. What is confirmed is that it is a capable, cheap, coding-focused model reachable through an OpenAI-compatible endpoint, and that its single dated independent measurement — a 2026-09-04 OpenCode leaderboard snapshot — put it at **#15 with 23.14/40** on coding, at **$0.03 average cost per prompt** and **1:51 average time per prompt**. The community reads it as the likely 2.0 successor to **Ox Alpha**, the earlier stealth model later unmasked as Z.ai's **GLM-5.3-Flash**; a briefly exposed `zhipu/omen-alpha` code path drove the GLM-family speculation, but that is a clue, not an attribution. Treat every vendor claim on its site as unverified.
- **Provider / access:** **OpenCode Go** (`opencode-go/omen-alpha`) — reported at **$10/month** including **$100 of usage credit**, model ID `omen-alpha` on a standard OpenAI-compatible chat-completions endpoint. Also served via **TokenRa** (`tokenra.io`) at a promotional **$0.08 in / $0.26 out**, 60% off list. **Exactly one provider listing** exists across the catalogues checked (OpenCode Go), so there is no failover and no second source to cross-check pricing or behaviour.
- **Release / knowledge:** First observed **2026-09-04**; Model Pulse logged it as a new model on 2026-09-05. **Knowledge cutoff not disclosed.**
- **IDs:** `omen-alpha` (OpenCode Go and TokenRa). Not a Free-tier ID — access requires the Go subscription or TokenRa credits.
- **Context window:** **~500,000 tokens, community-reported, not officially documented**, with a **128K maximum output** (Model Pulse and modelcompare.dev, both sourced from models.dev). Treat the 500K figure as a catalogue value rather than a vendor contract: with one provider and no official docs page, there is nothing to hold xAI or anyone else to.
- **Modalities:** In: text, **image**. Out: text. Capabilities declared by the provider listing: reasoning, tool calling, structured output (JSON-schema-constrained decoding), attachments/vision, temperature control. **Not open weights.**
- **Pricing (as of 2026-09-26):** **$0.20 in / $0.66 out / $0.04 cached read per 1M tokens** (OpenCode Go list price, corroborated by Model Pulse and modelcompare.dev). TokenRa promotional rate $0.08 / $0.26. The $10/month Go subscription with $100 of credit is the effective entry point. Zero data retention and no training on prompts, per the provider.
- **Privacy:** 0-day data retention; prompts are stated not to be used for training. Worth verifying against the provider's own terms before sending anything sensitive — it is a self-published claim on an unattributed model.

### Raw benchmarks found

The **only** independent measurement located, and it is a single dated snapshot rather than a benchmark suite:

OpenCode leaderboard, evaluated 2026-09-04, methodology v1, environment OpenCode:

- **Rank #15** on the OpenCode leaderboard
- **23.14 / 40** overall coding score
- **$0.03** average cost per prompt
- **01:51** average elapsed time per prompt

Component breakdown from the same snapshot:

| Benchmark project | Omen Alpha | Max |
|---|---|---|
| Code quality (expanded leaderboard component) | 9.94 | 20 |
| CSV import (PHP) | 4 | 5 |
| Offline sync (PHP) | 3.5 | 5 |
| Bank feed (Dart / Flutter) | 2.7 | 5 |
| Shipping quotes (Go) | 3 | 5 |

Read that table honestly: the project rows are 80%, 70%, 54% and 60% of their maxima, and the code-quality component is 49.7%. The headline 23.14/40 is 57.9% of maximum. This is a **mid-tier** coding result, and the component scores show the weakness is code quality rather than task completion — it finishes the PHP and Dart/Flutter jobs but writes mediocre code doing it.

Everything else — GPQA Diamond, AIME 2025, HLE, MMLU-Pro, CritPt, AA-Omniscience, SciCode, SWE-bench Verified / Pro, Terminal-Bench 2.0 / 3.0 / 4.0, CursorBench, LiveCodeBench, Vibe Code Bench, DeepSWE, GDPval-AA, AA-Briefcase, AutomationBench-AA, τ³-Banking, τ²-bench, ITBench, Claw-Eval, ClawProBench, Toolathon, MCP-Atlas, MMMU-Pro, AA-LCR, MRCR, RULER, LMArena, EQ-Bench, Creative Writing v3, Artificial Analysis Intelligence Index, BenchLM overall: **no verified public score found.** None. The model is three weeks old, has no model card, and no recognised laboratory has evaluated it.

> **Evidence-quality warning.** omenalpha.io presents itself as an official site with a benchmarks page, a comparison page and an FAQ. It is not an official vendor site — the vendor is unknown — and its own pages are careful to say so: the Ox Alpha relationship "has not been officially confirmed", model parameters "are not yet publicly disclosed", and its comparison table marks the Ox Alpha column "no same-run result published" rather than inventing a number. That candour is to its credit and is why its figures are used here. The site also runs a standing "60% OFF" TokenRa promotion against a list price, and its "independent model evaluation" is a single leaderboard row it did not run. Everything below is scored on that basis.

### Normalized scores (1–100)

- **Tool use: 62/100.** Tool calling and JSON-schema-constrained structured output are declared and were exercised end-to-end: the benchmark run completed real multi-language projects (PHP, Dart/Flutter, Go) through an agentic harness, which is a genuine tool-integration test even if an indirect one. Capped at 62 because **no** recognised tool-use benchmark exists for it — no Terminal-Bench, no τ-bench, no MCP-Atlas, no Toolathon, no GDPval, no Claw — so the entire agentic dimension rests on one indirect observation, and only one provider serves the model.
- **Reasoning: 60/100.** Reasoning is a declared capability and the coding snapshot exercises multi-step problem solving inside a harness, which is more than nothing. 60 is deliberately near the middle: with **no GPQA, AIME, HLE or MMLU figure in existence**, the knowledge and formal-reasoning axes are entirely unknown, and reasoning quality is one of the two things (the other being identity) that a stealth preview is most likely to be optimising for later.
- **Context window: 80/100.** ~500K with a 128K output cap, which is the same 200K–1M band Grok 4.7 occupies. Held at 80 rather than the mid-80s because the number is **community-reported, not vendor-documented** — it comes from models.dev via Model Pulse and modelcompare.dev, sourced from a single provider listing, with no official docs page and no long-context retrieval result (no MRCR, RULER, GraphWalks or AA-LCR) anywhere. A 500K spec you cannot hold the vendor to is worth less than a 500K contract.
- **Multimodal: 68/100.** Text and **image** in, text out — the "+image in = 60–70" tier, taken near the top because the provider listing explicitly declares vision and attachment support. No MMMU-Pro, no DocVQA, no OCR or chart benchmark, so image capability is declared rather than demonstrated.
- **Coding: 72/100.** The model exists to code, and there is exactly one coding measurement of it: **23.14/40 (#15)** on the OpenCode leaderboard, with component scores of 9.94/20 on code quality and 4/5, 3.5/5, 2.7/5, 3/5 across four project tasks. That is a competent, mid-tier result — methodology's 65–75 band — and the shape of the breakdown is informative: it completes tasks at 54–80% but produces the weakest output on code quality, which is what you would expect from a fast, cheap, GLM-family-adjacent coding model rather than a frontier one. No SWE-bench, Terminal-Bench, CursorBench or LiveCodeBench exists to corroborate or contradict it.
- **Cost efficiency: 96/100.** **$0.20 in / $0.66 out / $0.04 cached read** blends to roughly $0.30 per 1M at a 3:1 ratio — well under the ~$0.60/$2.20 reference that anchors ~92, and the $0.04 cache rate is the cheapest in this comparison. It is also the only dimension with a *measured* rather than an inferred number: **$0.03 average cost per prompt** on the leaderboard run, at 1:51 per prompt. With a TokenRa promotional rate of $0.08/$0.26 and a $10/month subscription carrying $100 of credit, the effective cost is lower still. Held at 96 rather than higher because it is a paid model with a single provider, the promotional rate is temporary, and 1:51 per prompt is not fast.
- **Overall Score: 68.4/100.** Mean of the five quality dims: (62 + 60 + 80 + 68 + 72) / 5. **Read this as a low-confidence score, because that is what the evidence supports.** The one thing genuinely established about Omen Alpha is that it is **cheap and competent at coding** — $0.03 a prompt, #15 on the OpenCode leaderboard, mid-tier on the components — and that it is served by exactly one provider under an unattributed name with zero third-party evaluation. **Best fit — a cheap experimentation candidate for coding and agent workflows, and nothing more.** Do not build on it yet: you are betting on an unknown vendor, a single-provider dependency, a context figure nobody has published officially, and a lineage (likely Z.ai GLM-5.x) that is community inference. If the Z.ai attribution turns out to be right, a GLM-family model at $0.20/$0.66 with a 500K window and vision is genuinely interesting. Until someone confirms it — or an AA, Terminal-Bench or SWE-bench number appears — treat 68.4 as a placeholder with a price attached, not a verdict.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-26
- Method: public internet research (omenalpha.io — non-official, self-published, and treated as such — including its benchmarks, what-is and Ox-Alpha-comparison pages; modelcompare.dev; Model Pulse / vaanalytics.in via models.dev); scores are normalized 1–100 interpretations, not official vendor scores. Every number above carries its source. For a model with no vendor, no model card and no recognised-lab evaluation, the dominant finding is the absence of data: every missing row is stated as "no verified public score found" rather than estimated, the single dated leaderboard snapshot is labelled as one run rather than a suite, and the unconfirmed Z.ai/GLM lineage is reported as community inference.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
