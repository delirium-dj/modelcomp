# GLM-5 — findings by GLM 5.3 Flash

- Source: Z.ai / Zhipu AI (`glm-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Z.ai's (Zhipu AI) fifth-generation flagship foundation model, released February 2026 — a 744B-parameter open-weight MoE focused on agentic engineering and long-horizon tasks, trained on Huawei Ascend silicon. The base model of the line that continues through GLM-5.1, 5.2, and 5.3; not a shorthand for those successors.
- **Provider / access:** Z.ai API `glm-5` (docs.z.ai; OpenAI-compatible), chat.z.ai playground, FriendliAI hosting, Ollama library. Also offered on OpenCode Zen as `opencode/glm-5` (live roster, fetched 2026-10-16 — paid route; no `glm-5-free` variant exists, unlike `glm-5.3-flash-free`).
- **Release / knowledge:** released 2026-02-11 per llm-stats' tracker (launch coverage dated 2026-02-12 by WinBuzzer and 2026-02-14 by redeep.blog — treated as one release window, Feb 11–14); no knowledge-cutoff statement found.
- **IDs:** `glm-5` (Z.ai), `opencode/glm-5` (Zen, paid).
- **Context window:** 200K total / 128K max output (llm-stats provider rows for both ZAI and FriendliAI; consistent with the 200K figure in all independent reviews). Verified across two provider listings plus secondary coverage.
- **Modalities:** text in / text out; reasoning yes; tool calls yes (agentic engineering focus); no image/audio I/O documented; JSON mode not explicitly confirmed in sources consulted.
- **Pricing (as of 2026-10-16):** paid only — $1.00 in / $3.20 out per 1M tokens (ZAI and FriendliAI identical on llm-stats); positioned at roughly one-fifth to one-sixth of GPT-5.2-class output pricing per independent coverage.
- **Architecture:** open weights, MIT license; 744B total parameters, Mixture-of-Experts — CONFLICT on active params: 40B per most sources (ollama, opper.ai, Wikipedia lineage) vs 44B in llm-stats' launch analysis; the 40B figure is more widely corroborated. Trained on ~28.5T tokens (llm-stats) on ~100K Huawei Ascend chips (independent reporting).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **75.9%** (benchgen aggregator)
- CyberGym: **43.2%** (benchgen aggregator)
- Terminal-Bench: **~56–61%** (webscraft review — range, harness unspecified; provisional)
- Vending-Bench 2: **$4,432** end balance (Baidu Baike, citing Zhipu's release materials)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Neura Intelligence Index: **72.7/100** (neura.market — nonstandard index, indicative only)

Coding:

- SWE-bench Verified: **77.8%** — #1 among open-source models at release; confirmed independently by airank.dev, llm-stats launch analysis, WinBuzzer, and Baidu Baike
- SWE-rebench: **42.1%** (airank.dev)

Long context:

- No public MRCR/RULER number found for the 200K window

### Normalized scores (1–100)

- **Tool use: 80/100.** BrowseComp 75.9% and strong Vending-Bench 2 long-horizon behavior; CyberGym 43.2% and the unspecified-harness Terminal-Bench range keep it below the coding-flagship tier.
- **Reasoning: 74/100.** No public GPQA/HLE number exists; the Neura Index 72.7 and its agentic-engineering positioning support a provisional mid-high score — capped by absent standardized reasoning benchmarks.
- **Context window: 65/100.** 200K/128K is a solid mid-tier window (no 1M claim), with zero published long-context retrieval benchmarks to verify depth.
- **Multimodal: 15/100.** Text-only I/O; no vision or audio support documented.
- **Coding: 82/100.** SWE-bench Verified 77.8% (open-source #1 at release, corroborated by four sources) but SWE-rebench 42.1% on the decontaminated rebench variant shows a real gap; successors (5.1–5.3) quickly surpassed it.
- **Cost efficiency: 80/100.** $1/$3.20 per 1M with MIT open weights — well below proprietary frontier pricing, though newer GLM generations undercut it further.
- **Overall Score: 63/100.** Mean of (80+74+65+15+82)/5 = 63.2 → 63. Best fit: self-hosted agentic coding on a budget under MIT terms; superseded within the family by GLM-5.1+ for capability-critical work.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (llm-stats model page + launch analysis, airank, benchgen, WinBuzzer, Baidu Baike, webscraft, redeep.blog; one data conflict — active parameters 40B vs 44B — resolved toward the corroborated 40B); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
