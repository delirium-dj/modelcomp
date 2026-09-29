# Omen Alpha — findings by Space Bunny Alpha

- Source: TokenRa / `omen-alpha` (vendor unconfirmed; widely reported as the 2.0 successor to Ox Alpha)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** A low-cost reasoning model for coding and agentic work, widely reported as the 2.0 successor to Ox Alpha — though neither Omen's vendor nor that lineage has been officially confirmed. It is positioned as a cheap, privacy-first, OpenAI-compatible route for production coding agents. Not a variant of another tracked entry, but the Ox Alpha relationship is a live, unverified claim.
- **Provider / access:** Served through the **TokenRa** route under the model ID `omen-alpha` on an **OpenAI-compatible Chat Completions** endpoint (`zen/go/v1/chat/completions`; base URL per TokenRa docs). Keys are issued from `tokenra.io`. OpenCode Data also tracks the model and attributes it to **Zhipu** on one comparison page while labelling the author "unknown" on others — the vendor attribution is unresolved.
- **Release / knowledge:** No official release date and no knowledge cutoff have been published. The first dated public evaluation is the **2026-09-04** OpenCode leaderboard snapshot. OpenCode usage data covers 2026-08-03 → 2026-09-27 with sustained traffic from early July 2026 onward: **74K unique users, 525,099 completed sessions, 0.3% token share, 69% weekly retention, usage rank #24**.
- **IDs:** `omen-alpha` (TokenRa). The repository `meta.json` records the Zen-facing id as `opencode/omen-alpha`. No free tier exists; this is a paid route.
- **Context window:** **Still not officially disclosed, but the range has narrowed and the disagreement has moved.** TokenRa's own model page now headlines the product as **"1M Context"** and describes Omen Alpha as "built for coding, complex reasoning, and agentic production use with a **1M-token context window**". On the very same page's comparison table, however, TokenRa writes that context length is **"Not officially disclosed; commonly cited as 500K, measured at 969K or more (close to 1M)"** — i.e. the provider markets 1M and simultaneously declines to confirm it. OpenCode Data still renders the context length as *Unknown*. Max output is community-reported at ~128K.
- **Modalities:** **Changed since 2026-09-27.** TokenRa's own comparison table now lists Omen Alpha's input modalities as **"Text and image (video behaviour matches)"**, against Zhipu's own GLM-5.3-Flash row for text/image/video. It adds that Omen's "tokenizer and vision/video behaviour are nearly identical" to GLM-5.3-Flash. This is provider-documentation-level evidence of image input, **not** a benchmark, and it replaces the earlier "no image support shown anywhere" position. OpenCode Data still lists the modalities as *Unknown*. Reasoning is claimed by the vendor's marketing ("low-cost reasoning model") but no reasoning benchmark exists.
- **Pricing (as of 2026-09-29):** **Rate cut on the gateway — $0.13 input / $0.50 output / $0.03 cached read per 1M tokens** (TokenRa model page, live 2026-09-29), down from the $0.20 / $0.66 / $0.04 card this report carried on 2026-09-27. The `omenalpha.io` benchmark/marketing page **still shows the old $0.20 / $0.66 / $0.04** and tells readers to confirm live terms with TokenRa, so treat **$0.13 / $0.50 / $0.03 as the current rate** and the other card as stale. A 60%-off promotional route at $0.08/$0.26 has also been advertised. **0-day data retention, prompts not used for training.** Measured average cost per prompt in the dated benchmark snapshot: **$0.03**.
- **Architecture:** Proprietary and undisclosed. No parameter count, no open weights, no architecture family has been published.

> **Vendor attribution — clarified but still unresolved, 2026-09-29.** TokenRa now states this explicitly rather than leaving it to inference: "Omen Alpha's developer has not been officially disclosed; speculation points to a Zhipu AI model (glm-5.3-highspeed), but this is unconfirmed. TokenRa provides the API gateway and is not the model developer or owner." TokenRa adds that **some users report it has been confirmed *not* to be Zhipu**, which cuts against the OpenCode Data Zhipu attribution. No further progress was made on the Ox Alpha succession claim: `omenalpha.io` still shows "No same-run result published" for Ox Alpha, so the lineage remains unverified.

> **The 500K-vs-1M context question, restated.** Three positions now circulate: (a) TokenRa's page marketing **1M**; (b) TokenRa's own comparison table saying **not officially disclosed, commonly cited as 500K, measured at 969K+**; (c) the OpenCode Go route (`opencode-go/omen-alpha`) at **500K context / 128K max output with text + image in**. The gateway and the competitor host disagree, and the gateway contradicts itself. The Context window score below credits the provider-side 1M claim but does not treat it as verified, because no host has published a limit it will stand behind and no MRCR/RULER/GraphWalks retrieval test exists.

### Raw benchmarks found

> **Evidence caveat, stated up front:** exactly one dated public evaluation exists for this model — a single OpenCode leaderboard snapshot from 2026-09-04 covering four implementation projects on a five-point project rubric. It is a genuine agentic coding measurement, but it is **not** a standard academic suite, and no other evaluator has published a number. **Re-checked 2026-09-29: the omenalpha.io benchmark page still reads "Last evaluated: September 4, 2026" and still reports rank #15 / 23.14.** No new independent measurement has appeared. Every score below that is not on that snapshot is a real gap, not an oversight.

Agent / tool use:

- OpenCode leaderboard **rank #15** (OpenCode, snapshot 2026-09-04, Omen Alpha **High** configuration) — re-confirmed unchanged 2026-09-29
- OpenCode leaderboard overall coding score: **23.14 / 40** (OpenCode, snapshot 2026-09-04)
- Per-project implementation scores on that snapshot: CSV import (PHP) **4/5**; Offline sync (PHP) **3.5/5**; Bank feed (Dart/Flutter) **2.7/5**; Shipping quotes (Go) **3/5** (OpenCode, snapshot 2026-09-04)
- Code-quality component (expanded leaderboard view): **9.94 / 20** (OpenCode, snapshot 2026-09-04)
- Average time per prompt: **01:51**; average cost per prompt: **$0.03** (same snapshot)
- Terminal-Bench 2.1, Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, Toolathon, MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found**
- Artificial Analysis Intelligence Index: **not listed** for this model (re-confirmed 2026-09-29 — no Artificial Analysis model page exists)

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index / BenchLM overall, Omniscience Accuracy / Hallucination Rate: **no verified public score found** in any reviewed source
- The single proxy available is the coding snapshot above; the OpenCode coding component is a weak stand-in for reasoning and is labelled provisional here.

Coding:

- OpenCode leaderboard coding score: **23.14 / 40** = 57.9% of the visible maximum (OpenCode, snapshot 2026-09-04; the four project rows and the total are transcribed from the snapshot, and the site's own methodology note says the code-quality component uses a different scale and must not be summed into the 23.14)
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode / AA-SciCode, Vibe Code Bench, DeepSWE / Coding Index: **no verified public score found**

Long context:

- **No long-context retrieval reported.** No MRCR, RULER or GraphWalks result exists. With the window now claimed at 1M by the gateway and cited at 500K by a competing host, the retrieval question is more consequential than before and entirely unanswered.

Sources consulted: [Omen Alpha API — pricing, specs & integration (TokenRa)](https://tokenra.io/models/omen-alpha-api.html), [Omen Alpha benchmarks (snapshot 01)](https://omenalpha.io/benchmarks.html) and [Omen Alpha official site / API docs](https://omenalpha.io/), both accessed 2026-09-29; [OpenCode Data — omen-alpha usage](http://opencode.ai/data/unknown/omen-alpha) and [OpenCode Data — Omen Alpha comparison page](https://opencode.ai/data/compare/zhipu/omen-alpha/zhipu/test), accessed 2026-09-29. The Ox Alpha comparison on the benchmarks page is explicitly marked as having no same-run source data, so no Ox Alpha figure is used here.

### Normalized scores (1–100)

- **Tool use: 62/100.** Unchanged. The one real measurement is an agentic one: a #15 finish on OpenCode's coding-agent leaderboard with 4/5 and 3.5/5 on two of four implementation projects. That is credible agent behaviour, but a single small four-project snapshot with no Terminal-Bench, Tau or Toolathon figure cannot support a higher score.
- **Reasoning: 45/100.** Unchanged. Deliberately conservative. The vendor markets a "reasoning model" and there is not one published GPQA, HLE, MMLU or Index number anywhere — the coding snapshot is the only proxy and it is labelled provisional. This is a floor, not a measurement.
- **Context window: 68/100.** **Up from 45.** The gateway now markets a **1M-token window** and TokenRa's own table concedes community measurement at 969K+, which is materially above the "undisclosed" position this report held on 2026-09-27 and above the 500K figure the competing host publishes. It is still not scored as verified — the provider contradicts itself, OpenCode Data says Unknown, there is no retrieval test, and the gateway is an unconfirmed front for an undisclosed model — but "we do not know anything" is no longer accurate, and 68 credits a provider-stated 1M without pretending it is measured.
- **Multimodal: 30/100.** **Up from 15.** TokenRa's own comparison table documents **text and image input**, and reports that Omen's tokenizer and vision/video behaviour are "nearly identical" to Zhipu's GLM-5.3-Flash (a natively multimodal MoE). That is documentation from the route operator, not a vendor model card and not a single vision benchmark, so it clears the text-only floor but nothing like a measured multimodal tier. OpenCode Data still says Unknown; no image run has been published by anyone.
- **Coding: 60/100.** Unchanged. 23.14/40 on the OpenCode snapshot, with a 49.7% code-quality component (9.94/20) and a weak 2.7/5 on the Dart/Flutter project — solid working-agent behaviour, well short of the dedicated coding models on the same leaderboard.
- **Cost efficiency: 94/100.** **Up from 92.** The gateway rate fell from $0.20/$0.66/$0.04 to **$0.13/$0.50/$0.03** per 1M, and the measured $0.03 average per prompt is the lowest cost figure in this report. It loses the last points only because there is no free tier, the published rate card is inconsistent between TokenRa and omenalpha.io, and the headline input rate sits above the sub-$0.10 tier.
- **Overall Score: 53.0/100.** (62 + 45 + 68 + 30 + 60) / 5 = 53.0 — **up from 45.4**, driven by Context window 45 → 68 and Multimodal 15 → 30 on the new TokenRa documentation, plus a small Cost efficiency gain. Tool use, Reasoning and Coding are unchanged. Best fit: budget-constrained production coding agents that need an OpenAI-compatible drop-in and a zero-retention policy, and that can live with a window the provider markets at 1M but will not confirm. Not a fit for anything needing *verified* multimodal input, published reasoning quality, or a documented context limit — on this model, none of those three can be established from public evidence, and the 2026-09-29 research narrowed the speculation without closing the gap.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of the serving gateway's own model page, the vendor benchmark page and its dated OpenCode leaderboard snapshot, and OpenCode's public usage/attribution data. This is a re-research that supersedes an earlier negative finding for this folder: a dated, source-attributed OpenCode coding measurement exists, so the model is scored rather than excluded. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- **Re-validation 2026-09-29 (MATERIAL):** TokenRa cut the rate card to $0.13/$0.50/$0.03 and now markets a 1M context window and text+image input; vendor attribution is explicitly "not officially disclosed" with reports it is *not* Zhipu. The only benchmark (OpenCode, 2026-09-04, #15 / 23.14) is unchanged, and there is still no Artificial Analysis entry. Overall 45.4 → 53.0.
- Future sources: add a new file next to this one, e.g. `Omen_Alpha_2.md`, using the same headings.
