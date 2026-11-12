# LongCat 2.5 Preview — findings by Big Pickle

- Source: OpenCode (`opencode/big-pickle`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Low-confidence report.** Meituan published **no benchmark table, no model card and no weights** for
> LongCat-2.5-Preview (unlike LongCat-2.0, whose card published Terminal-Bench 2.1, SWE-bench Pro and
> GPQA-diamond). Every number below therefore comes from **third parties who paid for the endpoint**,
> not from the vendor. Two independent measurements exist, and they are the only ones.

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's 2026-09-25 **API-only preview** of the LongCat 2.5 generation: a
  trillion-class sparse-MoE served behind a 1M-token window, with **image input added** to the 2.0
  generation's agentic coding profile. It is positioned as an autonomous-agent model (Claude Code /
  OpenCode / OpenClaw / Hermes / Kilo Code compatibility) and is **free on OpenCode Zen for a limited
  time** (zero-retention provider), where it has become a top-10 model by token volume. It is *not* a
  GA release — the LongCat API pricing page states that pay-as-you-go "currently supports
  LongCat-2.5-Preview" only.
- **Provider / access:** OpenCode Zen — model ID `opencode/longcat-2.5-preview-free`, endpoint
  `https://opencode.ai/inference/openai/v1/chat/completions` (Chat Completions), **Free** input/output/
  cached read for a limited time, provider follows a **zero-retention** policy and does not train on your
  data. LongCat API Platform — `model=LongCat-2.5-Preview`, OpenAI-compatible Chat Completions plus
  native Responses and Anthropic Messages endpoints. Vercel AI Gateway — `meituan/longcat-2.5-preview`.
  Third-party resellers (e.g. nano-gpt) list it at the undiscounted rate.
- **Release / knowledge:** 2026-09-25 (LongCat API Platform change log, 2026-09-25 entry). No
  knowledge-cutoff date is published anywhere.
- **IDs:** `opencode/longcat-2.5-preview-free` (OpenCode Zen) · `meituan/longcat-2.5-preview` (OpenCode
  Data / Vercel AI Gateway) · `LongCat-2.5-Preview` (LongCat API Platform).
- **Context window:** **1,048,576 tokens (1M)** per Vercel AI Gateway and OpenCode Data; max output
  **131,072** per those two hosts, but **262,144** per the modelbenchmark.io host table and MathBench —
  an unresolved conflict between hosts. No MRCR / RULER / GraphWalks retrieval figure has ever been
  published for this endpoint.
- **Modalities:** **text and image in, text out** (image understanding is the headline new feature:
  cross-modal Q&A, content summarization, complex visual reasoning). **No video and no audio input**,
  no non-text output. Reasoning/thinking: yes. Tool calling: yes (native tool calling is the product
  pitch).
- **Pricing (as of 2026-10-22):** OpenCode Zen `opencode/longcat-2.5-preview-free` — **Free** (input,
  output and cached read), limited time. LongCat API Platform pay-as-you-go — **$0.30 uncached input /
  $0.006 cached input / $1.20 output** per 1M, explicitly a *limited-time discounted* price (¥2 / ¥0.04 /
  ¥8 in China). List/undiscounted rate seen at resellers: $0.75 / $0.015 / $2.95.
- **Architecture:** proprietary — **no weights published** for the 2.5 line (the change log lists
  Hugging Face + GitHub links for LongCat-Flash-Chat, LongCat-Flash-Thinking and LongCat-Flash-Lite,
  but none for 2.5). Vendor-adjacent reporting puts it at ~1.6T total / ~48B active parameters in a
  sparse-MoE with LongCat Sparse Attention (LSA) for the 1M window, and native DiNA multimodality;
  **unverified** — there is no model card to check it against.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / 2.0 / 4.0: **no verified public score found** — the model is absent from the
  Epoch AI / Terminal-Bench 4.0 leaderboard (52 models, snapshot 2026-10-21) and from The Known Good's
  Terminal-Bench table
- TAU2-Bench / Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AI Coding Daily LM coding leaderboard (24 prompts, OpenCode harness, GPT-5.6-Soul judging,
  evaluated 2026-10-02): **66.6%** of the 70-point scale — 46.65 points, **#44 on the board**; sub-scores
  Laravel code quality 16.98/20, React-TS code quality 16.67/20, bug-finding test 2.4/10, edge-case
  testing 10.6/20; **16:50 average per prompt** (Opus 5.5 High: 3:42). The reviewer's own verdict:
  "towards the bottom… it's okay, it's not anywhere close to any frontier models"
- MathBench (independent run, thinking on, 200 hard problems): **19.0%** — 38/200 problems solved
  (32/150 short answer, 6/50 Lean), combined score 19.0/100, **#40 of 85**; **131 turns and 282K output
  tokens per problem**, 1.7 h average model time, $0.65 solve cost per problem

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (no AA, BenchLM, LMSpeed, Airating or Arena entry
  exists for this model)
- HLE: **no verified public score found**
- LCR / MLCR / AA-LCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (neither
  board carries a page for this model)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Hard-reasoning proxy: MathBench **19.0%** (see agent section) is the only published measurement of
  reasoning difficulty on this checkpoint
- *Not transferable:* LongCat-**2.0**'s own card published GPQA-diamond 88.9, IMO-AnswerBench 81.8,
  IFEval 90.0, BrowseComp 79.9 — those are the **2.0** checkpoint and are **not** attributed to 2.5 here

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (Meituan published nothing; the model
  is absent from every SWE-bench leaderboard checked)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / Aider polyglot: **no verified public score found** (the model is not on the
  Aider polyglot leaderboard)
- Code quality proxy: AI Coding Daily **66.6%** of the 70-point scale, **#44** on that board, with a
  2.4/10 bug-finding score and a 16:50 average prompt time (see agent section)
- *Unverified third-party marketing claim, recorded but not scored:* a reseller blog (APIVALE) quotes
  **88.6% on SWE-bench Lite** for "LongCat 2.5 API" and describes audio-stream understanding. No
  benchmark board, model card or third-party run corroborates either claim, and the audio claim
  contradicts every host spec (text + image only) — treated as marketing, not evidence

Long context:

- MRCR / RULER / GraphWalks at 512K–1M: **no verified public score found** — the 1M window is advertised
  by three hosts and by Meituan's own "1M long context" framing for the 2.0 generation, but no retrieval
  benchmark exists for either
- Indirect long-horizon evidence: MathBench averaged **131 turns and 282K output tokens per problem**
  inside the 1M window without a context error being reported — behaviour, not a retrieval score

### Normalized scores (1–100)

- **Tool use: 40/100.** The model demonstrably drives tools end-to-end (24 prompts completed through
  OpenCode, 131 turns per MathBench problem, native tool calling, documented Claude Code / OpenClaw /
  Hermes compatibility) but **no tool benchmark exists at all** — no Terminal-Bench, τ²-bench, OSWorld or
  AutomationBench number — and the only measured agent behaviour is bottom-third on the coding board
  (#44) at 16:50 per prompt; the score reflects "functional but unvalidated and slow", not a missing-data
  placeholder.
- **Reasoning: 30/100.** The single hard-reasoning measurement is MathBench **19.0%** (38/200 competition
  problems, #40 of 85), with zero GPQA / HLE / LCR / CritPt / AA-Index data and no Arena or LiveBench
  entry — the score sits below the methodology's mid band because the only evidence is a sub-20% score on
  the hardest math set, but the absence of any frontier-reasoning measurement is itself the cap.
- **Context window: 92/100.** 1,048,576 tokens advertised by Vercel, OpenCode Data and
  modelbenchmark.io (the ≥1M tier, normally 95–100), discounted to 92 because **not one retrieval
  benchmark exists at 512K–1M**, the endpoint is still labelled a preview, and hosts disagree on max
  output (131,072 vs 262,144).
- **Multimodal: 62/100.** Image input is the launch feature (cross-modal Q&A, summarization, visual
  reasoning) with **no audio, no video and text-only output**, which is the "+image in = 60–70" band —
  placed at the bottom of that band because no vision benchmark (MMMU, MathVista, ScreenSpot, OmniDoc)
  has ever been run against it.
- **Coding: 47/100.** The only code measurement is the AI Coding Daily board: 66.6% of the 70-point
  code-quality scale but **#44 of the field**, a 2.4/10 bug-finding score and a 16:50 average prompt time
  (4.5× slower than Opus 5.5 High on the same harness); with no SWE-bench, LiveCodeBench, SciCode or
  Terminal-Bench data the model cannot be placed in the methodology's mid band.
- **Cost efficiency: 100/100.** Scored on the evaluated tier, `opencode/longcat-2.5-preview-free`:
  **Free** input, output and cached read on OpenCode for a limited time, with a **zero-retention**
  provider that does not train on your data — the cheapest tier in the catalogue. The paid fallback is
  also cheap ($0.30 / $1.20 with a $0.006 cached read, ~95), and OpenCode Data shows the slot taking
  **8.9T tokens across 281K users** at 94.3% cache-hit rate. Both the free window and the $0.30/$1.20
  rate are explicitly temporary.
- **Overall Score: 54/100.** Mean of the five quality dims (40 + 30 + 92 + 62 + 47) / 5 = 54.2 → 54 —
  a free, 1M-context multimodal agent endpoint whose *capability* is almost entirely unmeasured; take it
  for cheap long-context agent exploration, but do not assume it matches the LongCat-2.0 numbers its
  vendor published for the previous generation.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-22
- Method: public internet research (LongCat API Platform change log and pricing documentation, the
  official OpenCode Zen model catalogue and pricing table, OpenCode Data usage page, Vercel AI Gateway
  and modelbenchmark.io model records, MathBench's independent LongCat-2.5-Preview leaderboard, the AI
  Coding Daily LM coding leaderboard and its review video, plus a documented absence check across
  Terminal-Bench, LiveBench 2.0, Aider polyglot, LMArena, Artificial Analysis, BenchLM, LMSpeed and
  Airating). Conflicting figures are listed side by side with their host and harness; the unverified
  reseller claim is labelled as such; scores are normalized 1–100 interpretations, not official vendor
  scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
