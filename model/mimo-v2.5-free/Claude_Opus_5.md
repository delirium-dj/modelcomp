# MiMo V2.5 Free — findings by Claude Opus 5

- Source: Xiaomi (MiMo team) / OpenCode Zen (`opencode/mimo-v2.5-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (the free OpenCode Zen tier of Xiaomi's **MiMo-V2.5**)
- **Short description:** Xiaomi's natively omni-modal sparse-MoE flagship — one model with in-house visual **and audio** encoders that sees, hears, and acts — released 2026-04-22 as "a leap in agency and multimodality" ([Xiaomi MiMo-V2.5](https://mimo.xiaomi.com/mimo-v2-5)). **This entry is a pricing tier, not a separate model:** it is the same weights as MiMo-V2.5 served free, for a limited time, through OpenCode Zen ([Zen docs](https://opencode.ai/docs/zen/)). The sibling `MiMo-V2.5-Pro` is a genuinely different (larger-cost, 2× credit) SKU and has its own folder.
- **Provider / access:** OpenCode Zen, ID `mimo-v2.5-free`, endpoint `https://opencode.ai/zen/v1/chat/completions` (**Chat Completions**, OpenAI-compatible — not a Responses API). Natively also Xiaomi AI Studio, the Xiaomi MiMo API, and open weights on Hugging Face.
- **Release / knowledge:** MiMo-V2.5 released **2026-04-22**. Knowledge cutoff: no verified public date found. Training corpus: 48T tokens.
- **IDs:** Zen `opencode/mimo-v2.5-free` (free tier) — the paid/native route is Xiaomi's own API and the open weights. **A Free ID does exist here**, which is the whole point of this folder, but Zen explicitly labels it limited-time.
- **Context window:** **1,000,000 tokens native** on the released `MiMo-V2.5` checkpoint (the `MiMo-V2.5-Base` checkpoint is 256K), reached by progressively extending 32K → 256K → 1M during post-training ([Xiaomi](https://mimo.xiaomi.com/mimo-v2-5); corroborated as 1M by [BenchLM](https://benchlm.ai/models/mimo-v2-5)). This repo's `meta.json` records a **200K Zen cap / 32K output** for the free tier; I could **not** verify that cap in Zen's public docs, which publish IDs and prices but not per-model windows — so it is flagged as curated-but-unverified and priced into the score as uncertainty.
- **Modalities:** **Text + image + video + audio in → text out.** Native (not bolted-on) understanding across all four: dedicated visual and audio encoders, both pretrained in-house, joined to the language backbone through lightweight projectors. Reasoning: yes (BenchLM classifies it as a reasoning model). Tool calls: yes — agentic post-training is a headline feature. No generated images or audio.
- **Pricing (as of 2026-10-08):** **Free** on Zen — $0 input, $0 output, $0 cached read ([Zen pricing table](https://opencode.ai/docs/zen/)). Two material caveats, both published by Zen: it is "available on OpenCode for a limited time" while the team collects feedback, and **"during its free period, collected data may be used to improve the model"** — i.e. this tier is outside Zen's otherwise-standard zero-retention policy. Native non-Zen economics: Xiaomi's Token Plan charges MiMo-V2.5 at **1×** (1 token = 1 credit) versus 2× for V2.5-Pro, and as of this release no longer applies a multiplier for the 1M window; the repo's "~$0.14/$0.28 per 1M" native figure is **not** something I could verify on Xiaomi's page.
- **Architecture:** **310B total parameters, 15B active**, Sparse MoE, FP8 (E4M3) mixed precision, trained on 48T tokens. Language backbone inherits MiMo-V2-Flash's **hybrid sliding-window attention**. Five-stage training: text pre-training → projector warmup → large-scale multimodal pre-training → SFT + agentic post-training (with the 32K→256K→1M context extension) → RL and MOPD. **Open weights** (weights, tokenizer, and full model card on Hugging Face); the exact licence text is not stated on the release page and I found no verified licence identifier.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.8%** ([Xiaomi MiMo-V2.5](https://mimo.xiaomi.com/mimo-v2-5))
- Terminal-Bench 2.1: **60.7%** ([Vals AI](https://www.vals.ai/models/xiaomi_mimo-v2.5)) — independent, and the most useful agentic datapoint here
- Claw-Eval (general subset): **62.3%** ([Claw-Eval leaderboard](https://claw-eval.github.io/)); Xiaomi claims this places it "at the Pareto frontier of performance and efficiency"
- MM-ClawBench (multimodal agentic): **23.8%** (Xiaomi)
- ResearchClawBench: **16.9%** ([leaderboard](https://internscience.github.io/ResearchClawBench-Home/))
- Gert Labs rankings: **46.89%** ([Gert Labs](https://gertlabs.com/rankings))
- Tau2/Tau3-bench, GDPval-AA, Toolathon, MCP-Atlas, OSWorld: no verified public score found
- Xiaomi's internal "MiMo Coding Bench" is cited as matching MiMo-V2.5-Pro at half the cost, but **no number is published**, so it is not credited

Reasoning / knowledge:

- GPQA Diamond: **81.6%** ([Vals AI](https://www.vals.ai/models/xiaomi_mimo-v2.5))
- MMLU-Pro: **82.9%** (Vals AI)
- **HLE, CritPt, AA-LCR, MLCR, Artificial Analysis Intelligence Index, Omniscience accuracy / hallucination rate: no verified public score found.** BenchLM assigns MiMo-V2.5 **no overall score at all** ("unranked", 16 of 623 benchmarks covered) — the reasoning evidence base is genuinely thin, not merely unaggregated.

Coding:

- SWE-bench Verified: **71.0%** ([Vals AI](https://www.vals.ai/models/xiaomi_mimo-v2.5))
- SWE-bench Pro: **56.1%** (Xiaomi)
- LiveCodeBench: **81.5%** (Vals AI)
- Terminal-Bench 2.0: **65.8%** (Xiaomi, counted once for coding and once for agentic)
- SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Multimodal:

- Video-MME (with subtitles): **87.7%** (Xiaomi) — Xiaomi claims parity with Gemini 3 Pro on video
- MMMU-Pro: **77.9%** (Xiaomi)
- CharXiv: **81%** (Xiaomi)
- Design Arena — Website: **1271 Elo** ([OpenRouter benchmarks](https://openrouter.ai/xiaomi/mimo-v2.5/benchmarks))
- **Audio benchmarks: no verified public score found** — the audio encoder is architecturally documented but not publicly measured anywhere I could find, which is a real gap given audio is a headline claim

Long context:

- **No MRCR, RULER, LongBench, or needle-retrieval number published at any window length.** The 1M figure is an architectural/training claim (32K→256K→1M staged extension) with zero public retrieval validation, and the free Zen tier may be capped well below it.

### Normalized scores (1–100)

- **Tool use: 73/100.** Terminal-Bench 2.0 at 65.8% is a strong vendor figure and, unusually, it largely survives independent replication — Vals AI measures 60.7% on the harder 2.1 harness, which is a better result than most mid-tier models manage; Claw-Eval 62.3% backs it up on everyday agentic work. Capped firmly below the frontier by MM-ClawBench 23.8%, ResearchClawBench 16.9%, and the complete absence of τ²/τ³-bench, GDPval, or OSWorld numbers — there is no evidence at all about long-horizon or many-tool orchestration.
- **Reasoning: 70/100.** The two numbers that exist are both independent and both good — GPQA Diamond 81.6% and MMLU-Pro 82.9% from Vals AI. The score is held to 70 not because of a bad result but because of **missing results**: no HLE, no CritPt, no long-context reasoning, no hallucination measurement, and BenchLM declining to assign an overall score at all. Two exam benchmarks cannot certify frontier reasoning.
- **Context window: 78/100.** A documented, deliberately-trained 1M-token native window on a hybrid sliding-window-attention backbone is top-tier on paper, and Xiaomi removed the long-context price multiplier, which signals real confidence. Held well under the 90s for two reasons I can evidence: **zero** published retrieval measurement at any depth, and this specific free tier being recorded as capped at 200K in curated metadata I could not confirm either way.
- **Multimodal: 88/100.** The strongest dimension and the clearest differentiator in this dataset: genuinely four-way input (text, image, **video**, **audio**) through natively pretrained encoders rather than adapters, with Video-MME 87.7% with subtitles, MMMU-Pro 77.9%, and CharXiv 81%. Capped below the 90s by text-only output (no generated media), by MM-ClawBench 23.8% showing multimodal *agency* lagging multimodal *perception* badly, and by the audio pathway having no public benchmark whatsoever.
- **Coding: 74/100.** SWE-bench Verified 71.0% and LiveCodeBench 81.5% are both from Vals AI rather than the vendor, which makes them worth more than self-reported equivalents; SWE-bench Pro 56.1% is a reasonable hard-set result. Capped by the absence of any frontier-difficulty coding set (no FrontierCode, no SWE-bench Pro replication, no SciCode) and by Terminal-Bench 2.0 at 65.8% rather than the 80s that frontier coders now post.
- **Cost efficiency: 97/100.** $0 in, $0 out, $0 cached read on Zen for a 310B/15B-active omni-modal model with a 1M native window is as close to a free lunch as this dataset contains, and the open weights mean the capability survives the promotion ending. Docked 3 points for two disclosed, non-monetary costs: the tier is explicitly **limited-time**, and prompts and completions **may be used to improve the model** during the free period — a real exclusion from Zen's standard zero-retention policy that rules this tier out for confidential work.
- **Overall Score: 76.6/100.** Mean of the five non-cost dims (73 + 70 + 78 + 88 + 74) / 5 = 76.6. Best fit: free, high-volume multimodal ingestion — video, chart, document and audio understanding — plus mid-weight agentic coding, on non-confidential data. Avoid it where the workload needs certified long-context retrieval, measured hallucination behaviour, or long-horizon multi-tool autonomy; and plan for the free tier to expire.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Xiaomi's MiMo-V2.5 release page (architecture, parameter counts, training stages, context extension, open-source table, Token Plan rates), the OpenCode Zen documentation (model ID, endpoint, $0 pricing, limited-time and data-use caveats), BenchLM's aggregated MiMo-V2.5 page, and the Vals AI, Claw-Eval, ResearchClawBench, Gert Labs and OpenRouter leaderboards it cites. The repo's own `meta.json` was consulted only to identify the tracked tier; its unverifiable claims (200K Zen cap, ~$0.14/$0.28 native pricing) are reported as unverified rather than restated as fact. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
