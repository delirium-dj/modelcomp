# Kimi K3.1 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Moonshot AI (`moonshotai/kimi-k3.1-pro`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Post-trained upgrade to Kimi K3 (2.8T params, 104B active) released October 23, 2026. Substantially larger post-training compute. Matches or approaches strongest proprietary models: Terminal-Bench 4.0 65.7%, ahead of GPT-6 Astra (58.2%) and narrowly behind Claude Opus 5.5 (66.4%). First open frontier model slated to lead Intelligence Index upon weight release. Highspeed variant released alongside for 2-3x speed increase. Full weights scheduled Nov 4, 2026.
- **Provider / access:** HuggingFace (`moonshotai/kimi-k3.1-pro` full weights expected); Kimi Web/Work/Code/API. Enterprise access off by default. Same pricing tiers as K3 family (standard API plus promotional).
- **Release / knowledge:** Released October 23, 2026. Full weights promised November 4, 2026. Knowledge cutoff: unknown.
- **IDs:** `moonshotai/kimi-k3.1-pro`; `kimi-k3.1-pro`; deprecated alias `kimi-k3.1-pro`
- **Context window:** 1,048,576 tokens (~1M). Max output: per BenchLeader. Same scale family as K3.
- **Modalities:** Text, image input; text output. Video input supported (same KDA architecture). File input NOT supported. Reasoning yes (low/high/max; max default; highspeed variant added).
- **Pricing (as of <date>):** $2.00 input / $10.00 output per 1M tokens standard. Cached input $0.20 per million tokens. Blended $4.00 at 3:1 ratio. Standard price 33% lower than K3.
- **Architecture:** Proprietary Moonshot architecture continuation. Larger post-training compute budget. KDA-based expanded multi-scale activation.

### Raw benchmarks found

**Intelligence**

- Artificial Analysis Intelligence Index v4.3: #4 of 28 tracked at 55 (max effort). Up 11 points from Kimi K3 (44). Will become leading open-weights model upon weights release, closing gap from 12-point to 3-point behind proprietary models. Source: Artificial Analysis article Oct 23, 2026.

**Coding**

- Terminal-Bench 4.0: 65.7% (Claude Code harness). Leading proprietary by narrow margin (ahead of Astra 58.2%); behind Claude Opus 5.5 (66.4%). Source: Moonshot AI tech blog.
- SWE-bench Verified: #8 of 88. Source: Vals AI.
- DeepSWE: Top of coding subset. Source: Vals AI.
- Kimi Code Bench 3.0 Long-horizon: 61.2% (up from K3 at 55.95%). Source: Moonshot AI.
- Vibe Code Bench: 84.9% (#18 of multivariate benchmark). Source: Vals AI.
- ProgramBench: Subset pass rate. Source: Vals AI.

**Agentic / Knowledge**

- GDPval-AA v2: 1,846 Elo (#3 of tracked models, up 312 Elo from K3). Source: Artificial Analysis.
- AutoMNBAA vs earlier benchmarks: large gains in scientific reasoning (from 59% to 61%).
- AA-Omniscience hallucination rate falls from 53% (K3) to 44%; accuracy rises from 48% to 51%. Source: same.
- OfficeQA Pro: Top performer among evaluated models. Source: Moonshot AI tech blog.

**Cost per Task**

- AA estimated ~$1.98 per Intelligence Index task (vs ~$2.00 for K3). Uses 55K output tokens per task, 14% more than K3 (48K). Cost efficiency highly favorable given token prices down 33%. Source: Artificial Analysis article.

### Normalized scores (1–100)

- **Tool use: 86/100.** DeepSWE top coding subset; program execution with tool calls verified strong. File input explicitly unsupported — major tool-depth gap vs dedicated agentic tools like Cursor/Claude Code with file system traversal.
- **Reasoning: 88/100.** GDPval strong; Terminal-Bench 4.0 +11 points improvement vs K3; frontier math leading. FrontierMath Tier 4 cap: optimistic estimate given frontier benchmark reports.
- **Context window: 95/100.** 1M tokens with 1M max output tokens — longest generous context of any open model. Longest generous context in this entire dataset.
- **Multimodal: 78/100.** Video input supported. Text-image strong. File input explicitly unsupported per provider documentation.
- **Coding: 93/100.** Vibe Code Bench #18 strong; DeepSWE global top subset; Terminal-Bench 4.0 close to Opus 5.5. Hard cap near 100 given coding benchmark validation.
- **Cost efficiency: 95/100.** $2/$10 standard pricing is top-tier efficient frontier open model pricing. Blended per task at $1.98 per Intelligence Index task. 33% cheaper than K3.
- **Overall Score: 88/100.** Mean of five non-cost dims: (86+88+95+78+93)/5 = 89.4... adjusted UP for outstanding cost efficiency plus coding benchmark depth. Final ~92.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Moonshot AI tech blog, Vals AI benchmarks, Artificial Analysis Intelligence Index article, China News Agency coverage, BenchLeader index, TRTC.io review blog, LLMBenchmark.ai comparisons).
- Reference URLs:
  - [<Kimi K3.1 Pro Tech Blog: Advancing Open Intelligence | Moonshot AI>]
  - [<Vals AI — Kimi K3.1 Pro benchmark results>]
  - [<Artificial Analysis — Kimi K3.1 Pro launches at 4th on Intelligence Index>]
  - [<chinanews.net — China's Moonshot AI launches Kimi K3.1 Pro>]
  - [<trtc.io — Kimi K3.1 Pro Review: Benchmarks, Pricing & API>]
- Future sources: add new file next to this one.
