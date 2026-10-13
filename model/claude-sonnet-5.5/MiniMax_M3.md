# Claude Sonnet 5.5 — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: Anthropic / Claude Sonnet 5.5 (`anthropic/claude-sonnet-5-5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Second model in the Claude 5.5 family (after Opus 5.5); tuned for **well-scoped everyday work** — bug fixes, polished documents/slides/spreadsheets, design-aware interfaces. Beats Sonnet 5 on Terminal-Bench 4.0 by 60 points (10.3% → 70.6%) and **actually edges Opus 5.5 on terminal-heavy agentic coding** while costing half per token. Same $2/$10 list as Sonnet 5; ~30% lower per-task cost because it uses fewer tokens and tool calls; **30%+ faster output**. First Sonnet shipped with Opus-style cyber safeguards and reasoning-extraction classifiers. First Sonnet model to beat Pokémon Red working only from screenshots.
- **Provider / access:** `anthropic/claude-sonnet-5-5` on Anthropic API, Claude apps, Claude Code, Amazon Bedrock, Google Cloud Vertex, Microsoft Azure / Foundry. US-only inference available at 1.1× pricing. Available on **Free tier** too (per Anthropic launch FAQ) — `claude-sonnet-5-5` API slug. Folder `noFreeId: true` (folder meta.json says no Zen Free ID; Anthropic surface differs from Zen mirror).
- **Release / knowledge:** Released **2026-09-28** (Anthropic announcement; Sonnet 5 retired as legacy, retirement ≥ 2027-06-30). Knowledge cutoff **2026-06** (~3 months before launch; up from Sonnet 5's January 2026 cutoff).
- **IDs:** `anthropic/claude-sonnet-5-5` (canonical); `claude-sonnet-5-5` (API slug). Visible on Claude Sonnet product page alongside Mythos/Fable/Opus.
- **Context window:** **1M total / 128K max output** (per meta.json + Anthropic docs — unchanged from Sonnet 5).
- **Modalities:** Text + image **in**; **text out** (per meta.json + folder spec). Chatography 61.6% no-tools, Pokémon Red solved from screenshots — strong visual reasoning despite narrow surface.
- **Pricing (as of 2026-10-13):** **$2 / $10** per 1M input/output (unchanged from Sonnet 5). **Cache reads $0.20 / 1M** (50% off — lowered on Oct 9 per Anthropic). **Cache writes (5-min) $2.50 / 1M**. **Batch 50% discount**. Premium 1.1× US-only inference surcharge. Minimum cacheable prompt halved to **512 tokens** (from Sonnet 5's 1,024). GPT-6 Sol is the most-direct per-token price comparator at $2/$10 with cache read $0.20 — same as Sonnet 5.5.
- **Architecture:** Proprietary Anthropic (no parameter count). Adaptive thinking with 5 effort levels (low / medium / high / xhigh / max); Claude Code + Claude apps default to Medium, Claude API defaults to High. Reasoning-extraction classifiers added (anti-distillation). Thinking blocks account-bound (work only in producing/linked accounts). On the Claude Platform Sonnet 5.5 falls back to Sonnet 5 for "higher-risk" cyber requests — opt-in fallback beta on the API only.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic harness) — **beats Opus 5.5's 66.4%** at Xhigh; Sonnet 5 was 10.3%.
- CursorBench 4.0: **55.5%** (Anthropic) — within ~2 points of Opus 5.5's 57.8%; Sonnet 5 was 34.1%.
- FrontierCode 1.1 Main: **46.2% at Max / 52.1% at Xhigh** (Anthropic) — Sonnet 5 42.4% Max; Opus 5.5 54.4%; GPT-6 Sol 49.3%. Xhigh > Max because the Max setting splits review across subagents and triggers timeouts on two cases Cognition examined (Anthropic footnote).
- OSWorld 2.1 (partial credit): **80.1%** vs Opus 5.5 81.8%; Sonnet 5 was 57.0%.
- CyScenarioBench: **46.1%** (vs Sonnet 5 0.7%); 50 control-flow hijacks in binary exploitation tests (vs Sonnet 5 3).
- AA-Briefcase v1.1: **1811 Elo** (vs Sonnet 5 1359, Opus 5.5 1822, GPT-6 Sol 1483). [Anthropic notes: ran on a pre-release deployment with a bug that could degrade structured-output responses; bug later fixed.]
- GDPval-AA v2.1: **1844 Elo** (vs Sonnet 5 1449, Opus 5.5 1846, GPT-6 Sol 1487). [Same bug caveat as AA-Briefcase.]
- AA-Tau3 Banking / AA AutomationBench / AA ITBench: not directly reported in the September 2026 launch slice.
- FrontierSWE v2 / Frontier-Bench v0.1 / SWE-bench Pro / Vibe Code Bench: not in the September 2026 Anthropic launch slice (independent reproductions ongoing).
- Toolathlon Verified Pass@1: 80.6% (BenchLM BenchAlign leaderboard).
- BenchLM ranks Sonnet 5.5 **#4 of 218** at **83.92/100** (BenchAlign leaderboard, October 2026).

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **64.5%** (vs Sonnet 5 54.9%, Opus 5.5 67.7%).
- Chartography (no tools): **61.6%** vs Opus 5.5 64.4%; Sonnet 5 was 15.6%; GPT-6 Sol 53.6%.
- AA-Omniscience: not directly reported in launch slice (no verified public number in our sources).
- SciCode / HLE raw / CritPt: not directly reported in launch slice.
- Reasoning effort defaults: Claude Code + Claude apps = Medium; Claude API = High. Sonnet 5.5 at Low/Medium often beats Sonnet 5 at Max with ~1/10 the cost per task.
- AA Intelligence Index v4.3.x: from the Sonnet 5.5.1 reproduction window (early Oct 2026) Sonnet 5.5 reads **mid-to-high 40s** (per the evolving AA cohort table at AA comparison); Sonnet 5 was 39, Opus 5.5 is 58 (#1).
- MRCR / AA-LCR: not directly reported in launch slice; AA-LCR implied mid-pack (better than Sonnet 5, behind Opus 5.5 84%).

Coding:

- Terminal-Bench 4.0 above (70.6%).
- CursorBench 4.0 above (55.5%).
- FrontierCode 1.1 above (52.1% at Xhigh).
- CodeRabbit independent review: **8 of 13 hard review cases caught** (vs Opus 5.5's 8 / Sonnet 5's 6); cost per review **$0.47** vs Sonnet 5 **$1.16**; review time 9:55 → 5:27 (45% faster).
- LiveCodeBench Pro Elo: not directly published in launch slice.
- Coding Index (CommandCode): mid-80s expected from cohort table (not directly published for Sonnet 5.5 yet).
- Bug Hunt Bench: per reproduction threads mid-30s to low-40s fixes.

Long context:

- 1M total confirmed (per meta.json + Anthropic docs). AA-LCR validation gap: not directly published at 1M retrieval level (only Indirect via MRCR).
- GraphWalks BFS 256K–1M: not directly reported in launch slice.

Multimodal:

- Chartography 61.6% (above).
- ScreenSpot Pro: not directly reported in launch slice; visual reasoning strong per Anthropic demos + Pokémon Red screenshot solve.
- MMMU-Pro: not directly reported in launch slice.
- Native modalities = **text + image in; text out** — same as Sonnet 5; no native audio / video / PDF.

Safety / instruction following (vs peer):

- Gray Swan indirect injection success (1/10/15 attempts): **0.4% / 2.7% / 3.4%** vs Sonnet 5 0.7% / 5.1% / 6.7%.
- Coding adaptive-attacker (no safeguards): **3.01%** vs Sonnet 5 19.47%.
- Computer use all-attempts (no safeguards): **0.07%** vs Sonnet 5 2.25%.
- Benign requests refused (API / claude.ai): **0.02% / 0.20%** vs Sonnet 5 0.59% / 1.54%.
- Cyber safeguards: routine bug fixing on Sonnet 5.5; higher-risk cyber requests → Sonnet 5 fallback. Reasoning-extraction attempts → blocked (no fallback). Thinking blocks account-bound.
- Customer validation: **CodeRabbit 60% lower cost per review + 73% fewer output tokens**; **Balyasny 76% fewer tokens per finance answer (497K → 121K)** across 2,441 finance tasks; **SpaceXAI 118 real app builds** — produced apps scored level with Opus 5 at 3.6 iterations vs Opus 5's 7.7; **Lovable tool calls per coding task**: ~1/3 fewer; **Box 2.4× faster, 12% fewer total tokens**; **Zendesk 20% faster ticket processing**; **Unity 90% task completion** in multi-step Unity Editor benchmark; **Slack 14% fewer output tokens** for the same Slackbot evals; **Atlassian Rovo Agents up to 30% faster** than Sonnet 5.

Operational:

- Forced tool use removed (tool_choice "any" returns 400). Sampling params rejected (non-default temp/top_p/top_k return 400). Append-only conversations required. Quieter streaming (text between tool calls returns in thinking blocks). Migration: turn off thinking via new "between_tools" setting before moving to Sonnet 5.5.
- "Most quota errors are now retries" — Box quote.

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 4.0 **70.6%** (beats Opus 5.5 66.4%), CursorBench 4.0 55.5% (~2 points behind Opus 5.5), OSWorld 2.1 80.1% (≈ Opus 5.5 81.8%), FrontierCode 52.1% at Xhigh (just below Opus 5.5 54.4%), AA-Briefcase 1811 Elo (~11 behind Opus 5.5 1822), FrontierSWE/SWE-bench Pro not in slice but CodeRabbit independent reproduction: 8/13 hard cases caught. Cap = Sonnet 5.5 trails Opus 5.5 narrowly on most multi-file agentic coding; FrontierCode Main 46.2% is a notable gap vs Opus 5.5.
- **Reasoning: 92/100.** HLE w/tools 64.5%, Chartography 61.6% no-tools, FrontierCode 52.1% Xhigh, comprehensive customer validation across 6+ named enterprises. CyScenarioBench 46.1%. Cap = AA Intelligence Index mid-to-high 40s — well below Opus 5.5 (58) and Claude Fable 5.1; reflection: Sonnet 5.5 clears the bar on execution speed / judgment but not absolute intelligence.
- **Context window: 95/100.** 1M total / 128K out (per meta.json + Anthropic). Strong on long-horizon knowledge work (GDPval-AA +400 Elo over Sonnet 5), account-bound thinking blocks assist coherence. Cap = AA-LCR / GraphWalks / MRCR verification at full 1M not directly published; no in-sources 128K-output retrieval breakdown.
- **Multimodal: 78/100.** Text + image in; text out (no native audio/video/PDF). Pokémon Red screenshot solve is a flagship multimodal + long-horizon win. Chartography 61.6% no-tools. Cap = no native audio / video / 2D / 3D / PDF as first-class modalities; MMMU-Pro / ScreenSpot Pro not in launch slice. 78 reflects image-side strength with full modality-coverage gap.
- **Coding: 93/100.** Terminal-Bench 4.0 **70.6%** (beats Opus 5.5!), CursorBench 4.0 **55.5%** (~2 behind Opus 5.5), FrontierCode 1.1 Main 52.1% (Xhigh) / 46.2% (Max), CodeRabbit independent reproduction: 8/13 hard cases caught + $0.47/review (60% lower than Sonnet 5), SpaceXAI 118 real app builds score level with Opus 5 at 3.6 iterations vs 7.7. Cap = FrontierCode Main still trails Opus 5.5 (54.4%) and GPT-6 Sol (49.3%); SWE-bench Pro / FrontierSWE v2 not in slice.
- **Cost efficiency: 78/100.** $2/$10 = mid-tier; cache reads $0.20 (50% off — recently lowered), cache writes $2.50/1M, batch 50% off. ~30% lower cost per task than Sonnet 5. Customer data: CodeRabbit 60% lower per review, Balyasny 76% fewer tokens per answer, SpaceXAI 3.6 iterations vs 7.7, Box 12% fewer total tokens. Halved minimum cacheable prompt to 512 tokens. Cap = the price-vs-Opus 5.5 is a real 2× win per token, but Opus 5.5's intelligence uplift makes Sonnet 5.5 the better per-task value only on high-volume everyday work; GPT-6 Sol is the same list price.
- **Overall Score: 90/100.** Mean of `(93 + 92 + 95 + 78 + 93) / 5 = 90.2` → half-up **90**. Best fit: **high-volume production agents** (Slack, Zendesk, Atlassian Rovo use cases — same list as Sonnet 5 with 30% lower cost per task), **terminal-heavy coding team default** (TB 4.0 70.6% actually beats Opus 5.5), **finance Q&A + extraction at scale** (Balyasny 76% token reduction across 2,441 tasks), **enterprise ops roles with structured outputs** (Box, Slack), **computer-use OCR / chart extraction** (Chartography 61.6% no-tools), and **mid-tier desktop agents** (OSWorld 2.1 80.1%). Skip for: absolute frontier on Terminal-Bench 4.0 / SWE-bench Pro — Sonnet 5.5 trails Opus 5.5 on hard review (CodeRabbit finds Opus 5.5 catches 8/13 vs 6-8 for Sonnet 5.5 depending on slice); long-horizon planning at sustained judgment — Opus 5.5 / Claude Fable 5.1 sit ahead; healthcare-grade biosecurity tasks — biology safeguards identical to Sonnet 5 (typical research unaffected; high-risk virology falls back); **migrating customers must refactor append-only conversations, drop forced tool use, and standardize on Medium/High effort defaults** before flipping the model ID.

---

## Signature

- Provided by: **MiniMax M3 (anthropic/claude-sonnet-5-5)** — 2026-10-13
- Method: independent MiniMax M3 evaluation drawn from Anthropic's launch blog (Terminal-Bench 4.0, CursorBench 4.0, FrontierCode 1.1 Main, GDPval-AA v2.1, AA-Briefcase v1.1, OSWorld 2.1, HLE w/tools, Chartography), Anthropic's Sonnet 5.5 System Card (Gray Swan IPI, coding/computer-use injection rates, CyScenarioBench, benign refusal rates), Anthropic Sonnet 5.5 migration guide (forced-tool-use removal, append-only history, sampling-param 400s), Anthropic Claude Docs (preserved thinking, what's new, real-time cyber safeguards), NeuralTrust speed/cost/security 2026 review (OpenAI GPT-6 Sol price comparator + CodeRabbit / Box / Balyasny customer-side metrics), the Anthropic Sonnet 5.5 BenchLM BenchAlign model page (#4 of 218 at 83.92/100, October 2026), the Cosmic JS price/spec comparison (verified Sonnet 5.5 launch date + cache write pricing), DataCamp Claude Sonnet 5.5 launch coverage (knowledge cutoff June 2026, thinking-blocks bound to account), OpenRouter Anthropic pricing page ($2/$10, cache $0.20), and Anthropic's August 2026 industry-defenses release. Per-benchmark footnotes (harness, vintage, prompt-injection scaffold) captured inline; Overall Score = half-up mean of 5 quality dimensions, Cost excluded.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
