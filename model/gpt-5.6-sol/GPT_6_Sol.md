# GPT-5.6 Sol — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship of the GPT-5.6 Sol/Terra/Luna family for agentic coding and knowledge work; official docs say bare `gpt-5.6` routes to Sol. `max` is an effort setting and `ultra` is a coordinated *multi-agent system*, neither a separate single-model benchmark ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.6-sol), [launch](https://openai.com/index/gpt-5-6/)).
- **Provider / access:** OpenAI `https://api.openai.com/v1` Responses or Chat Completions using `gpt-5.6-sol`; [Zen](https://pi.dev/models/opencode/gpt-5-6-sol) exposes paid `opencode/gpt-5.6-sol` via Responses at `https://opencode.ai/zen/v1`.
- **Release / knowledge:** General availability July 9, 2026 ([OpenAI launch](https://openai.com/index/gpt-5-6/)); cutoff February 16, 2026 ([official spec](https://developers.openai.com/api/docs/models/gpt-5.6-sol)).
- **IDs:** First-party `gpt-5.6-sol` (bare `gpt-5.6` alias resolves to this ID); Zen `opencode/gpt-5.6-sol`. No separate Zen Free ID in its paid listing.
- **Context window:** 1,050,000 total, up to 922,000 input, 128,000 output ([OpenAI spec](https://developers.openai.com/api/docs/models/gpt-5.6-sol), [Pi Zen](https://pi.dev/models/opencode/gpt-5-6-sol)). Multi-agent ultra's combined tokens are not a larger model window.
- **Modalities:** Native text/image in, text out; Responses tools include web/file search, shell, computer use and programmatic calling ([official spec](https://developers.openai.com/api/docs/models/gpt-5.6-sol)). PDFs are file/tool workflows; no native audio/video in or media out.
- **Pricing (as of 2026-10-12):** **Promotional $4 input / $20 output / $0.40 cached input / $5 cache write per 1M**, at least through November 21, 2026; >272K input triggers **$8/$30/$0.80/$10 for the full request** (not just extra tokens; [OpenAI](https://developers.openai.com/api/docs/models/gpt-5.6-sol), [Zen](https://pi.dev/models/opencode/gpt-5-6-sol)). The [local display metadata](../../model-comparison.md) is not a live price source; a $1.25/$10 label for Sol would conflict with verified first-party/Zen routes.
- **Architecture:** Proprietary, parameter count not published ([AA](https://artificialanalysis.ai/models/gpt-5-6-sol)).

### Raw benchmarks found

Compared [OpenAI's GA benchmark tables](https://openai.com/index/gpt-5-6/) with independent [Vals](https://www.vals.ai/models/openai_gpt-5.6-sol), [AA](https://artificialanalysis.ai/models/gpt-5-6-sol), [ARC Prize](https://arcprize.org/results/openai-gpt-5-6-sol), [Cursor](https://cursor.com/cursorbench) and [Proximal](https://www.frontierswe.com/). [BenchLM](https://benchlm.ai/models/gpt-5-6-sol) indexes source-linked rows but is not an independent evaluator. Vendor launch numbers often reflect `max`; distinguish that from multi-agent `ultra` and benchmark-version changes.

Agent / tool use:

- [OpenAI TB2.1 **88.8% single-agent max** versus **91.9% ultra**](https://openai.com/index/gpt-5-6/) (four agents by default); independent [Vals TB2.1 **85.77%**](https://www.vals.ai/models/openai_gpt-5.6-sol), [Vals TB4.0 **37.88%**](https://www.vals.ai/models/openai_gpt-5.6-sol). AA Terminal-Bench Hard **65.9%** ([sourced index](https://benchlm.ai/models/gpt-5-6-sol)) is yet another task set.
- [OpenAI BrowseComp **90.4% single / 92.2% ultra**, OSWorld 2.0 **62.6%**, GDPval-AA v2 **1747.8 Elo**, AutomationBench **18.1%**, Toolathlon **58%**](https://openai.com/index/gpt-5-6/); different from [AA's later normalized GDPval **55.4%**](https://benchlm.ai/models/gpt-5-6-sol).
- [Vals Index **58.01% ±1.02**](https://www.vals.ai/models/openai_gpt-5.6-sol) (#12/47 displayed), SRE Bench **30.53%**, CyberBench **76.31%**, CUA-bench **8.33%**, Harvey LAB **2.50%**. No exact-model Claw-Eval or Tau3-Banking found; [AA τ²-bench **85.1%**](https://benchlm.ai/models/gpt-5-6-sol) must not be relabeled τ³.

Reasoning / knowledge:

- [OpenAI GPQA Diamond **94.6%**, FrontierMath v2 Tiers 1–3 **89%** / Tier 4 **83%**](https://openai.com/index/gpt-5-6/); [ARC Prize verified ARC-AGI-2 **92.5% max** and ARC-AGI-3 **7.78% max**](https://arcprize.org/results/openai-gpt-5-6-sol). These test very different kinds of novelty and iteration.
- [AA GPQA **94.1%**, HLE **49.5%**, CritPt **32.3%**, current Index **47**](https://benchlm.ai/models/gpt-5-6-sol). OpenAI's launch **58.9 Index v4.1** is on a changed composite methodology and cannot be directly compared with the current v4.3-era page.

Coding:

- [OpenAI SWE-bench Pro **64.6%**, DeepSWE **72.7%**, TB2.1 **88.8%**](https://openai.com/index/gpt-5-6/) at its stated harness; [Vals SWE-bench **96.20%**, LiveCodeBench **82.60%**, Vibe Code Bench **80.50%**](https://www.vals.ai/models/openai_gpt-5.6-sol). SWE-Pro and SWE Verified measure different repositories/issues, not a single performance jump.
- [Proximal FrontierSWE v2 **32.2%**](https://www.frontierswe.com/) (34 long engineering tasks, five trials per task); [CursorBench 4.0 **41.7% at max** ($8.23/task)](https://cursor.com/cursorbench), [AA SciCode **57.1%**](https://benchlm.ai/models/gpt-5-6-sol)).

Long context / multimodal:

- [OpenAI MRCR v2 8-needle **91.5% at 256K–512K**, **73.8% at 512K–1M**](https://openai.com/index/gpt-5-6/); [AA-LCR **84.0%**](https://benchlm.ai/models/gpt-5-6-sol). The advertised 1M limit does not imply near-perfect long-range retrieval.
- [OpenAI MMMU Pro **83.0% without / 84.6% with tools**](https://openai.com/index/gpt-5-6/), independent [Vals MMMU Pro **88.84%**](https://www.vals.ai/models/openai_gpt-5.6-sol); all involve image input, not audio/video output.

### Normalized scores (1–100)

- **Tool use: 91/100.** TB2.1 85.77–88.8%, BrowseComp 90.4% single-agent and OSWorld 62.6% show capable agents; TB4 37.88%, AutomationBench 18.1% and CUA 8.33% constrain generality.
- **Reasoning: 94/100.** GPQA ~94%, FrontierMath Tier 4 83% and ARC-AGI-2 92.5% are strong; ARC-AGI-3 7.78% and later AA Index 47 moderate blanket claims.
- **Context window: 91/100.** Official 1.05M total with 128K out earns the large-context tier; MRCR 73.8% near 1M prevents top retrieval marks.
- **Multimodal: 68/100.** Image/MMMU strength and file tools, but native input is text/image, output text-only, with no audio/video I/O.
- **Coding: 93/100.** SWE Verified 96.2%, DeepSWE 72.7% and strong TB2.1 warrant a high score; FrontierSWE v2 32.2% and CursorBench 41.7% cap sustained-agent reliability.
- **Cost efficiency: 54/100.** $4/$20 promotional base, $8/$30 for >272K full requests, plus cache writes make high-effort long jobs expensive despite efficient tool use.
- **Overall Score: 87/100.** (91 + 94 + 91 + 68 + 93) / 5 = 87.4, half-up 87; strong coding/research operator when client pricing, effort and single-vs-ultra settings are explicit.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh OpenAI release/spec compared with independent Vals, AA, ARC Prize, Cursor and FrontierSWE; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
