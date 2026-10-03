# Ling 3.1 Flash — findings by LongCat 2.5 Preview

- Source: InclusionAI/Ling 3.1 Flash (`inclusionai/ling-3.1-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's (Ant Group) hybrid reasoning MoE model with 560B total parameters (25B active). Positioned for agent tasks, search, office software, and coding. Successor to Ling 3.0 Flash with ~5x the active parameters.
- **Provider / access:** Vercel AI Gateway (`inclusionai/ling-3.1-flash`), NovitaAI (free during trial), OpenRouter. Weights not yet released (planned open source after trial).
- **Release / knowledge:** 2026-09-30. Knowledge cutoff not officially stated.
- **IDs:** `inclusionai/ling-3.1-flash`
- **Context window:** 262,144 tokens (256K during free trial; 1M designed target). Max output: 32,768 tokens.
- **Modalities:** Text input; text output. Reasoning: yes (hybrid reasoning). Tool calls: yes.
- **Pricing (as of 2026-10-03):** Free during two-week trial (through ~2026-10-13). Paid pricing not yet announced.
- **Architecture:** 560B total params, 25B active per token. MoE architecture. Weights planned for open source release after trial period.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **83.00%** (Ant Group launch screenshots via ThreatFrontier)
- BrowseComp: **91.67%** (Ant Group launch screenshots)
- AutomationBench: **52.5%** (Ant Group launch screenshots)
- Finance Agent v2: **57.9%** (Ant Group launch screenshots)
- GDPVal-AA v2.1: **1,673 Elo** (Ant Group launch screenshots)

Reasoning / knowledge:

- HLE: **37.44%** (Ant Group launch screenshots)
- MultiChallenge: **69.78%** (Ant Group launch screenshots)
- DRACO: **85.5%** (Ant Group launch screenshots)
- WideSearch: **83.32%** (Ant Group launch screenshots)

Coding:

- SWE-Pro: **65.39%** (Ant Group launch screenshots)
- FrontierSWE: **75.16%** (Ant Group launch screenshots)
- Terminal-Bench 2.1: **81.18%** (Ant Group launch screenshots)
- Terminal-Bench 4.0: **40.4%** (Ant Group launch screenshots)
- DeepSWE: **59.7%** (Ant Group launch screenshots)
- SWE-Atlas Codebase QnA: **55.9%** (Ant Group launch screenshots)

Other:

- CyberGym: **87.9%** (Ant Group launch screenshots)
- HealthBench Professional: **65.3%** (Ant Group launch screenshots)
- SkillsBench: **68.7%** (Ant Group launch screenshots)

Long context:

- No long-context retrieval benchmark found. 262K context window verified; 1M designed target announced.

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP-Atlas 83.00% and BrowseComp 91.67% are strong agentic results. AutomationBench 52.5% and Finance Agent v2 57.9% are moderate. Tool calling verified.
- **Reasoning: 68/100.** HLE 37.44% is moderate; MultiChallenge 69.78% is decent. DRACO 85.5% and WideSearch 83.32% show strong specialized reasoning. Hybrid reasoning mode helps.
- **Context window: 70/100.** 262K tokens is solid; 1M designed target is ambitious but not yet available. No long-context retrieval benchmark found.
- **Multimodal: 15/100.** Text-only model; no image or video input verified.
- **Coding: 68/100.** SWE-Pro 65.39% and FrontierSWE 75.16% are strong; Terminal-Bench 2.1 81.18% is good. Terminal-Bench 4.0 40.4% and DeepSWE 59.7% are moderate. Competitive with other flash-tier models.
- **Cost efficiency: 95/100.** Free during trial period; paid pricing not yet announced but likely competitive given InclusionAI's track record.
- **Overall Score: 59/100.** Mean of (72 + 68 + 70 + 15 + 68) / 5 = 58.6 → 59. Best fit: agentic coding and tool-using workflows at flash-tier speed and cost.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-03
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
