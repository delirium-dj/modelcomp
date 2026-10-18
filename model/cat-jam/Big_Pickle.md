# Cat Jam — findings by Big Pickle

- Source: OpenCode Zen (`cat-jam` / `cat-jam-free`), Vercel AI Gateway (`stealth/cat-jam`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam
- **Short description:** Undisclosed vendor's stealth reasoning model for coding and agentic workflows, launched 2026-10-12/13 on OpenCode Zen (free, zero data retention) and 2026-10-15 on Vercel AI Gateway (free during stealth; Vercel lane may retain prompts for training). Positioned as "very fast, built for agentic coding" with low-latency inference. Community speculation (unconfirmed) suggests it may be Reflection's Beam model, but no source has verified this. Identity and benchmarks remain unverified. Also available on Command Code (free, all plans). Not an alias of any other entry.
- **Provider / access:** OpenCode Zen (`cat-jam-free`, released 2026-10-12); Vercel AI Gateway (`stealth/cat-jam`); Command Code. OpenAI-compatible API (chat completions). Function calling, structured JSON output, reasoning effort levels.
- **Release / knowledge:** released 2026-10-12/13 (OpenCode model registry; official @opencode X announcement 2026-10-13); Vercel AI Gateway 2026-10-15 (Vercel changelog). Knowledge cutoff not published.
- **IDs:** `cat-jam-free` (OpenCode Zen); `stealth/cat-jam` (Vercel AI Gateway).
- **Context window:** **262,144 tokens (262K) input / 131,072 tokens (131K) max output** per OpenCode's official model registry (aifree.dev, models.dev). Command Code lists "1M context token window" — this may reflect a different configuration, a post-update, or a marketing simplification; the 262K/131K figure from OpenCode's registry is treated as canonical. Note: repo `meta.json` says "1,048,576 (1M) / 131,072 max output (262K at launch)" — suggesting the context may have been increased from 262K to 1M after launch, possibly via context extension or a backend update. Both figures are noted.
- **Modalities:** text in / text out only. No image or attachment input (confirmed by OpenCode registry and Vercel). Reasoning effort levels: low, medium, high, xhigh, max. Tool calling (function calling) and structured JSON output supported. Streaming supported.
- **Pricing:** **$0 input / $0 output / $0 cache read** during stealth on both OpenCode Zen and Vercel AI Gateway. No end date announced — stealth free access can end without warning. The Vercel AI Gateway lane may use prompts for training (Vercel docs); the OpenCode Zen lane follows zero data retention.
- **Architecture:** proprietary (undisclosed vendor, weights private). Reasoning model with configurable effort levels. Very fast inference — early testers on r/opencode report 300+ tok/s; OpenCode's own usage data shows 94.9–96.4% input tokens served from cache, indicating aggressive prompt caching.

### Raw benchmarks found

> **No benchmark scores have been published for Cat Jam.** It is a stealth model — the vendor has not disclosed identity, architecture, or any benchmark results. No independent evaluation from Vals AI, BenchLM, Artificial Analysis, or other third parties exists. The figures below are usage/adoption statistics, not capability benchmarks.

Usage and adoption (OpenCode data, 2026-10-15 update):

- OpenCode rank by tokens: **#12** (up from #15 on 2026-10-14) — ahead of DeepSeek V4 Flash Vision Exp and DeepSeek V4 Pro; behind GLM 5.3 Flash, LongCat 2.5 Preview, Nemotron 3.5 Lightning, GPT-6 Luna
- Tokens served (past 2 months): **658B** (+100% vs previous period)
- Unique users: **23,000**
- Completed sessions: **478,160**
- Average tokens per session: **1.4M** — indicates long agentic sessions, consistent with the 262K context window being used heavily
- Average cost per session: **$0.0000** (free during stealth)
- Input tokens served from cache: **94.9%** — extremely high cache hit rate, indicating heavy prompt-prefix reuse in agentic loops
- Peak daily usage: 2026-10-14 — 340B tokens, 11K unique users, 232,347 sessions

Vercel AI Gateway (2026-10-15 changelog):

- "Cat Jam is a reasoning model for coding and agentic tasks, with low-latency inference. It supports function calling, so agents can connect it to your own tools, and structured outputs that follow a JSON schema you supply."
- Available in stealth for free on AI Gateway
- Vercel comparison page: "Cat Jam is a reasoning model for coding and agentic workflows, combining strong coding capabilities with fast, low-latency inference."

Command Code (2026-10-15):

- "Cat Jam (stealth model) is now free in Command Code. · 1M context token window · Super fast for agentic code · Reasoning with structured output. Available all plans, all subs."

Community speculation (unverified):

- Some model trackers suggest Cat Jam may be Reflection's Beam model. **Not confirmed by OpenCode, Vercel, Reflection, or any other source.** Treat origin as unknown.
- Early testers on r/opencode report "very fast (300+ tok/s in some tests) but quality varies by task."

Coding:

- SWE-bench Verified: **no verified public score found**
- Terminal-Bench: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Agent / tool use:

- BrowseComp: **no verified public score found**
- OSWorld: **no verified public score found**
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**
- BenchLM overall: **not computed** — model not on BenchLM leaderboard (stealth)

Multimodal:

- **No multimodal benchmarks** — text-only model (confirmed by OpenCode registry and Vercel).

Long context:

- **No verified public score found** — no RULER, MRCR, or AA-LCR score. The 1.4M average tokens per session (OpenCode usage data) suggests the context window is heavily used in practice, but this is an adoption signal, not a capability benchmark.

### Scores

- **Tool use: 55/100.** Function calling and structured JSON output are confirmed (Vercel changelog, OpenCode registry); 1.4M average tokens per session indicates real agentic usage at scale; 478K completed sessions on OpenCode alone. Offsets: no benchmark scores exist — the model is stealth and unbenchmarked; the agentic capability is inferred from usage patterns and vendor descriptions, not verified performance; community reports say "quality varies by task."
- **Reasoning: 50/100.** Reasoning model with five effort levels (low/medium/high/xhigh/max) per OpenCode registry; Vercel describes it as "a reasoning model for coding and agentic workflows." Offsets: no GPQA, HLE, AIME, or any reasoning benchmark score; identity and architecture unknown; no independent evaluation of any kind; quality reportedly varies by task.
- **Context window: 70/100.** 262K input / 131K max output per OpenCode registry (canonical); repo `meta.json` notes possible increase to 1M post-launch; Command Code lists 1M. If the 1M figure is accurate, this is frontier-class context. The 1.4M average tokens per session strongly suggests the window is heavily utilized. Offsets: the 1M figure is unverified; 94.9% cache hit rate means most "context" is cached prompt prefix, not novel long-context reasoning; no RULER or MRCR score exists.
- **Multimodal: 5/100.** Text-only. No image, video, or audio input (confirmed by OpenCode registry and Vercel).
- **Coding: 50/100.** Vercel describes "strong coding capabilities"; OpenCode's own announcement says "built for agentic coding"; the 478K completed sessions on OpenCode are overwhelmingly coding workloads. Offsets: no SWE-bench, Terminal-Bench, LiveCodeBench, or any coding benchmark score; stealth means no independent verification; community reports say quality varies; the model may be a repackaged or quantized version of a known model (Beam speculation), but this is unconfirmed.
- **Cost efficiency: 100/100.** $0 input / $0 output / $0 cache read on both OpenCode Zen and Vercel AI Gateway during stealth. 94.9% cache hit rate makes the effective cost even lower (most tokens are cached). This is the maximum possible cost efficiency score. Caveat: free access is time-limited by nature (no end date announced); the Vercel lane may use prompts for training.
- **Overall Score: 46/100.** Half-up mean of Tool use (55), Reasoning (50), Context window (70), Multimodal (5), Coding (50) = 230/5 = 46. Cost efficiency (100) is excluded per `model-comparison.md` methodology. The Multimodal score of 5 (text-only) drags the overall significantly — this is per the scoring rubric. The scores reflect vendor descriptions and adoption data only; no capability benchmarks exist.

### Caveats and conflicts

- **Stealth model — identity unknown:** the vendor has not disclosed who trained Cat Jam. Community speculation (some model trackers) suggests Reflection's Beam model, but this is **not confirmed** by OpenCode, Vercel, Reflection, or any other source. Treat origin as unknown.
- **No benchmarks of any kind:** Cat Jam has zero published benchmark scores — no vendor claims, no independent evaluations, no leaderboard placements. All scores in this report are inferred from vendor descriptions (Vercel: "strong coding capabilities," "fast, low-latency inference"), OpenCode's announcement ("very fast, built for agentic coding"), and usage statistics (478K sessions, 1.4M avg tokens/session, 94.9% cache hit rate).
- **Context window discrepancy:** OpenCode's model registry says 262K/131K (launch specs); repo `meta.json` says 1M/131K with "262K at launch" — suggesting a post-launch increase. Command Code also lists 1M. The 262K figure from OpenCode's official registry is treated as canonical for launch; the 1M figure may reflect a backend update or context extension. Neither figure has been independently verified.
- **Free access is temporary:** stealth free access on OpenCode Zen and Vercel AI Gateway can end without warning. No end date has been announced. The Vercel lane may use prompts for training (Vercel docs); the OpenCode Zen lane follows zero data retention.
- **Quality varies by task:** early testers on r/opencode report "very fast (300+ tok/s in some tests) but quality varies by task." This is consistent with a small or heavily quantized model that is fast but inconsistent.
- **Beam speculation:** the Reflection Beam connection is the most common speculation but has zero evidentiary support. Beam (Reflection AI) is a 501B/23B MoE with Apache 2.0 weights — a free stealth tier of Beam on OpenCode would be plausible, but no source confirms this. The report does not treat the Beam speculation as fact.
- **Usage data caveat:** the OpenCode usage statistics (658B tokens, 23K users, 478K sessions) measure adoption, not capability. High usage of a free model does not imply high quality — free models attract traffic regardless of performance.

### Sources

- OpenCode X announcement (2026-10-13): https://x.com/opencode/status/2110068008945381853
- OpenCode X announcement, earlier version (2026-10-13): https://x.com/opencode/status/2110056495153057976
- OpenCode data page (usage statistics): https://opencode.ai/data/unknown/cat-jam
- OpenCode data page, Arabic mirror (2026-10-15 update): https://opencode.ai/ar/data/unknown/cat-jam
- Vercel AI Gateway model page: https://vercel.com/ai-gateway/models/cat-jam
- Vercel changelog (2026-10-15): https://vercel.com/changelog/cat-jam-is-now-available-in-stealth-for-free-on-ai-gateway
- Vercel AI Gateway SDK docs (Cat Jam listed): https://vercel.com/docs/ai-gateway/sdks-and-apis/openai-chat-completions
- Vercel AI Gateway coding agents docs: https://vercel.com/docs/ai-gateway/coding-agents
- Command Code X post (2026-10-15): https://x.com/CommandCodeAI/status/2110833644910829749
- aifree.dev spec verification (2026-10-13): https://aifree.dev/news/opencode-cat-jam-stealth-model-free
- Mikel Echeve X post (2026-10-13): https://x.com/MikelEcheve/status/2110065238288503207
- Vercel X post (2026-10-15): https://x.com/vercel_dev/status/2110815707789492578

**Big Pickle (opencode/big-pickle)** — 2026-10-18
