# GPT-5.3-Codex — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's most capable agentic coding model, released 2026-02-05. It merges the frontier coding performance of **GPT-5.2-Codex** with the broader reasoning and professional-knowledge capability of **GPT-5.2** into one model, and runs about **25% faster**. It is tuned for long-horizon software-engineering work — research, tool use, terminal commands, repository search, multi-step debugging — and lets a user **steer and interact with it mid-task without losing context**, which OpenAI compares to working with a colleague. OpenAI notes it was partially used in its own creation. Not a variant or alias of another entry in this dataset; **GPT-5.3-Codex-Spark is a separate model** (a ChatGPT Pro research preview, not API-accessible) and is not scored here.
- **Provider / access:** OpenAI Codex surface — **app, CLI, IDE extension and web** — for paid ChatGPT plans, available at launch. **GitHub Copilot: generally available from 2026-02-09.** OpenAI API model ID `gpt-5.3-codex`, announced at launch as "rolling out in coming weeks" and now listed in OpenAI's developer docs with published pricing. Also on OpenRouter and Vercel AI Gateway at identical rates.
- **Release / knowledge:** released **2026-02-05**. Knowledge cutoff **2025-08-31**.
- **IDs:** `gpt-5.3-codex` (OpenAI API). OpenRouter: `openai/gpt-5.3-codex`. Sibling, distinct model: `gpt-5.3-codex-spark` (ChatGPT Pro research preview, **not API-accessible**).
- **Context window:** **400,000 tokens input, 128,000 tokens max output** (OpenAI developer docs, corroborated by AI/TLDR and LLM Reference).
- **Modalities:** **text and image in; text out** (AI/TLDR). Reasoning: yes — four effort settings, **`low` / `medium` / `high` / `xhigh`**; the published benchmark table is for **`xhigh`**. Streaming, function calling and structured outputs supported. **Native context compaction** — introduced with the Codex line and carried forward — is the mechanism behind the long-horizon claims and the token-efficiency result below.
- **Pricing (as of 2026-10-01):** **$1.75 / MTok input, $14.00 / MTok output**, cached input **$0.175** (OpenAI developer docs). Identical on OpenRouter and Vercel AI Gateway. No free tier. Note that this is **$0.50 / $4.00 more than GPT-5.2-Codex's $1.25 / $10.00** at launch — the price rose with the capability.
- **Architecture:** proprietary. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 2.0: 77.3%** (xhigh) — **the highest score recorded on that benchmark at launch**, and the largest generation-over-generation jump in the family: GPT-5.2-Codex **64.0%**, GPT-5.2 Thinking **62.2%**. OpenAI stresses it reaches this with **fewer tokens than any prior model**.
- **Terminal-Bench 2.1: 79.1%** mean task success — a **verified owner-leaderboard run under the Codex CLI protocol**, observed 2026-04-24 (Terminal-Bench benchmark owner, via LLM Reference). The protocol note is explicit that this is **not** protocol-compatible with Meta's provider-reported bash-tool-only harness, so the two families of Terminal-Bench numbers must not be merged.
- **OSWorld-Verified: 64.7%** — versus GPT-5.2-Codex's **38.2%**, a **+26.5 point** jump, and the single largest delta OpenAI highlights.
- **τ-bench: 77.8%** (observed 2026-04-24, LLM Reference)
- **GDPval (wins or ties): 70.9%** — matches GPT-5.2's professional-knowledge-work level (OpenAI)
- **SWE-Lancer IC Diamond: 81.4%** — GPT-5.2-Codex 76.0%, **+5.4** (OpenAI)
- **Cybersecurity Capture The Flag: 77.6%** — GPT-5.2-Codex 67.4%, **+10.2**. GPT-5.3-Codex is the **first OpenAI model rated "High capability" for cybersecurity under the Preparedness Framework**, which is a governance classification, not a score.
- Terminal-Bench 2.1 for GPT-5 nano and other members of this dataset's queue are far lower (GPT-5 nano: Terminal-Bench Hard 17.4%), which is why the 2.1-vs-2.0 distinction matters here rather than being academic.

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (There's An AI For That's benchmark profile for GPT-5.3-Codex, self-reported 2026-02-05). This is the **only published reasoning measurement for this specific checkpoint.**
- Humanity's Last Exam / CritPt / AIME 2025 / FrontierMath / ARC-AGI / Artificial Analysis Intelligence Index / AA-LCR / AA-Omniscience: **no verified public score found** for GPT-5.3-Codex at any effort level. The parent GPT-5.2's figures (HLE 34.5%, CritPt 12%, AIME 100%, FrontierMath T1–3 40.3%, ARC-AGI-2 52.9%, Index 30) are **not** transferred to this checkpoint.

Coding:

- **SWE-bench Pro (Public, 731 tasks, pass@1): 56.8%** (xhigh) — **new industry high** at launch; GPT-5.2-Codex 56.4%, GPT-5.2 Thinking 55.6% (OpenAI). Independently tracked as **#22 of 46** (LLM Reference, observed 2026-06-07). The honest read from Digital Applied is that this is **incremental leadership, not a step change**: +0.4 points over its own predecessor.
- **SWE-bench Verified: 85.0%** — official board, **#7 of 81**, observed 2026-04-24 (LLM Reference). OpenAI's own launch table states **80.0%**. Both are recorded here; the later board figure is used for scoring, and the 5-point gap is a real discrepancy rather than noise to be averaged away.
- **SWE-rebench: 58.2%** pass@1, best of 5 runs (observed 2026-05-28, LLM Reference) — contamination-resistant re-run benchmark.
- **Terminal-Bench 2.0 / 2.1:** 77.3% / 79.1% (see above) — for a coding agent, terminal competence *is* coding-agent performance, and OpenAI's framing is that these two plus SWE-Bench Pro are the three benchmarks they use to measure it.
- DeepSWE / SciCode / Vibe Code Bench / LiveCodeBench / Aider Polyglot: **no verified public score found**

Long context:

- **No long-context retrieval measurement was found** — no MRCR, RULER, GraphWalks or AA-LCR figure for this checkpoint. The 400K / 128K pair is a documented spec with **native compaction** as the engineering answer to exceeding it, not a measured retrieval capability. This is the largest evidence gap on the model card.

Vision / multimodal:

- Text and image input are supported, but **no MMMU, MMMU-Pro, DocVQA or CharXiv figure was found** for GPT-5.3-Codex. The parent GPT-5.2's CharXiv reasoning result (88.7%) is **not** transferred. For a model whose practical workload includes reading screenshots, diffs and error output, the absence of any published vision benchmark is a genuine gap in the record, not a claim of weakness.

### Normalized scores (1–100)

- **Tool use: 86/100.** The best-verified agentic profile of anything scored in this pass, and the dimension that justifies the model. **Terminal-Bench 2.1 at 79.1%** under a verified owner-leaderboard Codex CLI protocol, **Terminal-Bench 2.0 at 77.3%** (the benchmark's high-water mark at launch), **OSWorld-Verified 64.7%** after a +26.5-point jump, **τ-bench 77.8%**, **SWE-Lancer IC Diamond 81.4%**, and **GDPval 70.9%**. Two methodology anchors are close but not met: Terminal-Bench 2.1 85%+ for the 90–100 band, and the τ³/GDPval frontier of ~50%/~1750 Elo. It also reaches Terminal-Bench 2.0 leadership "with fewer tokens than any prior model," which is a throughput fact as much as a score. Held at 86 rather than higher because Terminal-Bench 2.1 at 79.1% still leaves ~6 points on the frontier anchor, and because the 2.0 and 2.1 numbers cannot be merged with third-party harness results.
- **Reasoning: 82/100.** Anchored on a single number, and that number is strong: **GPQA Diamond 92.6%**, which clears the methodology's 90% frontier threshold outright — the best reasoning measurement for this checkpoint on record. Scored down from frontier-band 88–95 for one honest reason: **there is no other reasoning figure.** No HLE, no CritPt, no AIME, no FrontierMath, no ARC-AGI, no Artificial Analysis Intelligence Index, no AA-LCR, no Omniscience figure exists for GPT-5.3-Codex at any effort. The parent GPT-5.2 scores 30 on the Intelligence Index and 52.9% on ARC-AGI-2, but those are a different checkpoint and are not borrowed. A coding-specialised model with one frontier-tier science score and no breadth evidence belongs at 82, not 90.
- **Context window: 78/100.** **400,000 tokens in, 128,000 out**, with **native context compaction** — placed in the methodology's 200K–500K band and scored in its upper half on spec strength: a 128K output ceiling and an explicit compaction mechanism for long-horizon sessions are real engineering advantages, and OpenAI's claim of reaching Terminal-Bench leadership on fewer tokens than any prior model is consistent with the window being usable. Scored at 78 rather than the band's 84 ceiling because **no retrieval measurement exists at all** — no MRCR, no RULER, no GraphWalks, no AA-LCR — so there is no evidence the model uses the 400K it is given. Spec, not demonstrated capability.
- **Multimodal: 65/100.** **Text and image in; text out.** Scored in the methodology's "+image in = 60–70" band, below its midpoint, because **no vision benchmark of any kind was published for this model** — no MMMU, MMMU-Pro, DocVQA or CharXiv. Image input is supported and matters in practice for a coding agent reading screenshots and rendered diffs, but on the available evidence this is a capability claim with no measurement behind it. No audio or video input, no non-text output, so the higher bands are unreachable on the evidence regardless.
- **Coding: 87/100.** Near the top of the methodology's frontier band on the two benchmarks that define it. **SWE-bench Verified 85.0% (#7 of 81 on the official board)** is an elite patch-generation result; **SWE-bench Pro 56.8%** is the contamination-resistant four-language industry high; **Terminal-Bench 2.1 79.1%** and **Terminal-Bench 2.0 77.3%** measure the terminal competence that makes a coding agent usable rather than merely a good patch generator; **SWE-rebench 58.2%** and **SWE-Lancer IC Diamond 81.4%** add two more independent confirmations. Held at 87 rather than in the 90–100 band because two methodology anchors are unmet — **Terminal-Bench 2.1 at 79.1% against the 85%+ anchor**, and **SWE-bench Pro at 56.8% is a frontier *lead* on a hard benchmark, not a frontier *score*** — and because DeepSWE, SciCode and Vibe Code Bench are all absent, so the Coding Index cannot be checked.
- **Cost efficiency: 64/100.** **$1.75 / MTok input, $14.00 / MTok output**, cached input $0.175, identical across OpenAI, OpenRouter and Vercel AI Gateway. Priced just above the methodology's **$3/$15 ≈ 60** anchor on the printed card, and this is a **$0.50 input / $4.00 output increase over GPT-5.2-Codex's $1.25 / $10.00** — the capability gain was paid for. Credited two points above the card price for genuine, OpenAI-documented efficiency: reaching SWE-Bench Pro and Terminal-Bench leadership **with fewer output tokens than any prior model**, which lowers *cost per accepted patch* independently of the token rate, and a ~25% speed improvement over GPT-5.2-Codex that shortens wall-clock agent loops.
- **Overall Score: 80/100.** (86 + 82 + 78 + 65 + 87) / 5 = 79.6 → **80**. Best fit: **long-horizon agentic software engineering in a real terminal** — multi-step refactors, migrations, CI and infrastructure debugging, anything where the agent must hold context across a session and be steered mid-task. It is the strongest Codex-line model on the board and it is available in the Codex CLI, IDE extension and app, not only through an API. Route general knowledge work to GPT-5.5 rather than here, and treat its vision and long-context claims as unmeasured: those are the two dimensions where this file's evidence is thinnest, and both are ones you can test yourself on your own repository before committing to $14.00/MTok.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research — OpenAI's GPT-5.3-Codex launch post (`openai.com/index/introducing-gpt-5-3-codex/`), including its appendix comparison table against GPT-5.2-Codex and GPT-5.2 Thinking, OpenAI's developer model page for `gpt-5.3-codex` (pricing, effort levels, API status), the official SWE-bench leaderboard, Terminal-Bench benchmark-owner leaderboard records as relayed by LLM Reference with its protocol caveats preserved, Writingmate's benchmark record with split/effort/verification annotations, AI/TLDR's spec sheet, Digital Applied's launch-delta table, and S5 Labs' release analysis. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Discrepancies are preserved rather than smoothed: SWE-bench Verified is recorded at both OpenAI's 80.0% and the board's 85.0%; Terminal-Bench 2.0 and 2.1 are never merged; and GPT-5.3-Codex-Spark is explicitly excluded as a separate model.
- Future sources: add a new file next to this one, e.g. `GPT_5_3_Codex_Spark.md` or `GPT_5_5.md`, using the same headings.