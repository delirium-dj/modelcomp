# GPT-6 Astra — findings by Ling 3.2 Flash

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (`gpt-6-astra`) — paid-tier flagship; no free tier (not on ChatGPT Free/Go; no Free ID on OpenCode Zen; "GPT-6 Pro" is the ChatGPT label for Astra on Pro/Business/Enterprise, subscription-only; separate quota variant GPT-6 Astra Pro).
- **Short description:** OpenAI's flagship reasoning/agentic model, built for end-to-end computer use and long-horizon coding/research tasks (autonomous multi-step work via Codex/Work, 24/7 batch jobs); variant "GPT-6 Astra Pro" (higher-quota subscription tier) verified; API id `gpt-6-astra`.
- **Provider / access:** OpenAI API (tool calls via Responses API only; Chat Completions is text-only and rejects tool calls per platform docs); ChatGPT Plus/Pro/Business/Enterprise; Azure/Microsoft Foundry; AWS Bedrock (`openai.gpt-6-astra`, + `us./global.openai.gpt-6-astra` CRIS); OpenRouter (`openai/gpt-6-astra`, + Flex `flex/openai/gpt-6-astra`); OpenCode Zen (`opencode/gpt-6-astra`, Console inference endpoint `https://opencode.ai/zen/v1/responses`, Responses API + other APIs translated); 44 providers on models.dev; Vercel AI Gateway and Google Cloud announced coverage.
- **Release / knowledge:** 2026-09-03 (US); Bedrock launch 2026-09-08; knowledge cutoff 2026-04-30 (Bedrock model card + models.dev `2026-04`).
- **IDs:** `openai/gpt-6-astra` (models.dev/OpenRouter/AA), `openai.gpt-6-astra` (Bedrock), `opencode/gpt-6-astra` (OpenCode Zen, paid); explicitly: no Free ID exists on Zen; also `openai-gpt-6-astra` CRIS, `openai.gpt-6-astra-bedrock`.
- **Context window:** 1,050,000 total / 128,000 output tokens (AWS Bedrock model card, models.dev, OpenCode Console, OpenRouter; llm-stats rounds to 1.1M); long-context surcharge >272K.
- **Modalities:** text + image (+file/PDF via Responses API `input_file` on Bedrock) in; text out; reasoning: yes (low/medium/high/xhigh/max, no `none` tier); tool calls: yes (Responses API, MCP, web/file search, computer use, CUA); JSON mode: yes (strict `json_schema` structured outputs); no native audio/video in or non-text out verified (OpenAI docs/llm-stats list text+image in, text out; Bedrock catalog template lists broader set generically).
- **Pricing (as of 2026-11-07):** paid $: standard ≤272K input $10 / output $50 / cache read $1.00 / cache write $12.50 per 1M; >272K whole-request re-rate $20/$75/$2/$25; Flex $5/$25; Fast 2x, Ultrafast 6x, Batch 50%; Bedrock in-region +10% ($11/$55); no Free tier → free-tier privacy guarantee N/A; paid API offers zero-data-retention option; Zen zero-retention by default.
- **Architecture:** proprietary/closed (models.dev "Closed"; BenchLM "Proprietary"); params not disclosed; OpenAI disclosed recurrent-depth (looped layers) + legacy-model supervision clues; ~5T-param third-party estimate unverified; press reports >100k GPUs (Stargate).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.42%** (DataLearner mirror of Terminal-Bench 2.1 leaderboard, high effort + tools, 13/71; max 86.74% 16/71; AA harness 57.2-59.6%)
- Tau3-Banking / Tau2-Bench: no verified public score found (τ³-specific row never published for this id in fetched AA/BenchmarkList/DataLearner pages; AA notes Astra regressed vs Sol on τ³-Banking but no value; closest verified row: generic TAU-Bench 68.0%, OpenRouter AutoExacto mirror, variant unspecified)
- GDPval-AA: **1542 Elo** (derived: Opus 5.5 1846 − 304 per lift-off.co.uk 2026-09-30; matches Anthropic launch-table comparison; AA: ~45 Elo drop vs GPT-5.6 Sol in GDPval-AA v2, 24 vs 45 turns/task at max effort)
- Claw-Eval / ClawProBench: no verified public score found (no gpt-6-astra row on BenchmarkList/BenchLM/AA pages fetched 2026-11-07)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathon no verified public score found; MCP-Atlas no verified public score found; SWE Atlas Codebase QnA **62%** (AA Coding Agent Index breakdown, Astra in Codex, Sol 54%)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI launch via BenchmarkList #1/46, 2026-09-03; AA xhigh 96.3% via count.co; OpenRouter AutoExacto 94.6-94.8%)
- HLE: **57.2%** (BenchmarkList/OpenAI launch, max effort + tools, #7/46; DataLearner mirror 57.20 max+tools #24/248) + HLE-Diamond **65.8%** (BenchLM mirror, no tools max effort, #1/18, 2026-10-05 snapshot)
- LCR / MLCR: no verified public score found (AA-LCR regression vs Sol noted in AA coverage, no value published)
- CritPt: no verified public score found (DataLearner compare-table row not verifiable; no AA CritPt value fetched 2026-11-07)
- Artificial Analysis Intelligence Index / BenchLM overall: **53 / tied #1** (AA 2026-09-09, Index v4.3-era, level with Claude Fable 5.1; launch-day v4.1.1 snapshot 61.2 #4/41 per BenchmarkList; AA Index v5 56.9 #2 per felloai 2026-10-27 — version drift flagged) / BenchLM **86.03 / #3** (benchlm.ai 2026-11-06, 90% CI 80.5-91.6)
- Omniscience Accuracy / Hallucination Rate: no verified public score found (accuracy absolute not published; AA says +4 pts vs Sol) / **51%** hallucination (AA-Omniscience, max effort, 2026-09-09; OpenAI internal eval 4.2% vs Sol 12.2% per InfoQ/system card, different harness)

Coding:

- SWE-bench Verified / SWE-Pro: Verified no verified public score found (OpenAI stopped reporting SWE-bench Verified Feb 2026 per count.co; no Astra row in AA/BenchmarkList/DataLearner) / Pro **96.9%** (DataLearner mirror, SWE-Bench Pro V2, high+tools, #5/11, small-N caveat; Pro Hard 90.2% #4/21)
- LiveCodeBench: no verified public score found (no Astra row on DataLearner/BenchmarkList/AA fetched pages 2026-11-07)
- SciCode / AA-SciCode: no verified public score found (AA reports SciCode regression vs Sol but publishes no Astra value in fetched pages; BenchmarkList has no SciCode row)
- Vibe Code Bench: **89.59%** (Vals.ai comparison table v1.1, reported ±1 SE 2.17; vs Sonnet 5.5 92.39%) — DataLearner 1-100 lane 27.64 #5/25 is a different scale, flagged
- DeepSWE / Coding Index / other: DeepSWE v1.1 **74.1%** (OpenAI launch; BenchmarkList #2/33 pass@1, mini-SWE-agent/Datacurve harness; DataLearner xhigh 74.12% #11/114; AA harness 68% vs Sol 72%); AA Coding Agent Index **62 tied #1** (AA 2026-09-09; launch snapshot 67 per trendingtopics; DataLearner v1.5 mirror 61.6 #2/11); HackerRank-Bench 43.51% #5; Terminal-Bench 4.0 57.7-59% (BenchmarkList OpenAI 57.7 #2/108; AA 59%); FrontierCode 64.5 #2/29; FrontierSWE v2 65.51 #1/23; SRE-Bench 88.0% pass@1 / 99.2% pass@4 #1/6; IOI (Vals v2) 100 #1/46; OpenAI Codex coding 74.8 (AA 0-100 scale)

Long context:

- MRCR v2 8-needle: **100% @256K-512K (#1/8) / 96.3% @512K-1M (#2/9)** (OpenAI launch via BenchmarkList; Sol 73.8% at 512K-1M); RULER / GraphWalks: no verified public score found

### Normalized scores (1-100, my interpretations; see formula/repo)

- **Tool use: 72/100.** Verified: TB2.1 87.42% high effort (board mirror, 13/71), AutomationBench-AA 69% #1, τ-bench 68.0% (OpenRouter), ALE 59.3% #1/32, OSWorld 2.0 72.6% #2/20, ScreenSpot-Pro 92.7% #2/59, SWE-Atlas-QnA 62%, GDP.pdf 31%; capped by GDPval-AA 1542 Elo (<1750 frontier marker), no τ³-Banking/Tau2 row, Zapier AutomationBench 41.4% #12/42, HackerRank-Bench 43.51% #5.
- **Reasoning: 87/100.** Frontier band: GPQA 96.0% #1/46, FrontierMath T4 v2 97.6% #1/5, HLE 57.2% w/ tools (#7/46) & HLE-Diamond 65.8% #1 no-tools (BenchLM), ARC-AGI-3 99.9% (Provider Adapter; 62.7% standard), AA Index 61.2 launch #4/41 and 53 tied #1 (AA 2026-09-09), BrowseComp 91.5% #2/44; capped by AA Index 53 on v4.3-era (<60+ marker), no verified CritPt/LCR/MLCR rows, ARC-AGI-3 harness gap.
- **Context window: 95/100.** >=1M verified tier (95-100) via Bedrock card/models.dev/Zen/OpenRouter (1,050,000 total, 128,000 out); 100 withheld because 512K-1M MRCR v2 retrieval is 96.3%, below the >=98%@512K+ bar (256K-512K is 100%).
- **Multimodal: 65/100.** +image in verified (OpenAI docs, llm-stats, BenchmarkList); text-only output; file/PDF via Responses `input_file` on Bedrock but no native PDF modality confirmed; no audio/video-in verified → +image band 60-70; 15 applies only to text-only models.
- **Coding: 86/100.** Frontier band: DeepSWE v1.1 74.1% (>=74 marker), TB2.1 87.42% high (>=85 marker), SWE-Pro V2 96.9% (small N 11), VCB v1.1 89.59% (Vals), AA Coding Agent Index 62 tied #1; capped by no SWE-bench Verified row (OpenAI stopped reporting Feb 2026), no LiveCodeBench/SciCode rows, AA-harness DeepSWE 68% <74, Vals ProgramBench 5.5%, VCB 1-100 lane 27.64.
- **Cost efficiency: 30/100.** $10/$50 per 1M standard tier (AA/OpenCode Zen/OpenRouter/models.dev agree) → ~30 anchor; partial offsets: cache read $1, Batch/Flex 50%, AA max task cost $3.26 (Index) / $7.09 (Coding Agent) below Fable 5.1 at same score, but per-token anchor governs; paid only, no free tier.
- **Overall Score: 81.0/100.** Mean of five non-cost dims (72+87+95+65+86)/5 = 81.0, half-up at 1 decimal; cost efficiency excluded per formula. Best fit: tool-heavy autonomous computer-use + long-horizon Codex/terminal engineering and 1M-context doc work where per-task cost stays below Fable 5.1 at equal score; overkill/expensive for casual chat or bulk cheap text (use GPT-6 Luna/Sol tiers).

---

- Provided by: **Ling 3.2 Flash (ling-3.2-flash)** — 2026-11-07
- Method: fresh public web research 2026-11-07 (Artificial Analysis launch article + evaluations, BenchmarkList, BenchLM, DataLearner mirror, OpenRouter, Vals.ai, HackerRank-Bench, AWS Bedrock model card, OpenCode Zen/Console docs, models.dev, OpenAI launch coverage via Xinhua/InfoQ/Unite.AI/RITS-NYU); every raw number carries source+harness/effort where available; normalized 1-100 are my interpretations under v4 formula, not official vendor scores; vendor-reported numbers flagged.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
